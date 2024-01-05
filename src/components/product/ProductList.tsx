import { useAppSelector  , useAppDispatch} from "../../hooks/reduxHook";
import { completeProduct ,removeProduct } from "../../store/slices/products/productsSlice";
import {product} from "../../data/product"
function ProductList() {
    const dispatch = useAppDispatch(); 
    const {products , searchTerm} =useAppSelector(({products : {data , searchTerm}}) => {
        const filteredProducts =  data.filter((item) => item.product.toLowerCase().includes(searchTerm.toLowerCase()))
        return {
            products : filteredProducts,
            searchTerm: searchTerm
        }
    });
    
    const renderProductListTitle = product[0].map((title) => {
        return(
            <span className="font-bold text-custom_brown w-1/4 text-center" key={title.productTitle}>{title.productTitle}</span>
        )
    })

    const renderProduct = products.map((item) =>{
        const searchedProductBold = searchTerm && item.product.toLowerCase().includes(searchTerm.toLowerCase());
        
    return (
        <li className="flex justify-around align-baseline flex-wrap" key={item.id}>
            <div className={`${searchedProductBold &&  'font-black text-custom_orangefillfillfill'} text-center w-1/4 text-ellipsis overflow-hidden `}>
                <p >{item.product}</p>
            </div>
            <div className="text-center w-1/4">
            <span>{item.count}</span>
            </div>
            
            <div className="flex items-center justify-center mx-auto w-1/4">
                <label htmlFor={item.id} className={`${item.isCompleted &&  'line-through'}  text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`}>
                    Complete
                    <input checked={item.isCompleted} className=" ms-2 text-sm font-medium  dark:text-gray-300" id={item.id} onChange={() => dispatch(completeProduct(item))} type="checkbox" value=""/>
                </label>
            </div>
            <button type="button" onClick={() => dispatch(removeProduct(item.id))} className="text-custom_warning hover:text-custom_blue font-extrabold w-1/4" > X</button>
            
        </li>
    )
    })

    return(
        <section className="px-11 py-3 bg-custom_blue">
            <ul className="bg-white">
                <div className="flex justify-around align-middle">
                    {renderProductListTitle}
                </div>
               {renderProduct}
            </ul>
        </section>
    )
}
export default ProductList;
