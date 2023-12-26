import { useAppSelector  , useAppDispatch} from "../../hooks/reduxHook";
import { completeProduct ,removeProduct } from "../../store/slices/productsSlice";
function ProductList() {
    const dispatch = useAppDispatch(); 
    const {data}=useAppSelector((state) => {
        return {
            data:state.products.data
        }
    })

    const renderProduct = data.map((item) =>{
    return (
        <li className="flex justify-around align-baseline" key={item.id}>
            <div>
                <p>{item.product}</p>
            </div>
            <div>
            <span>{item.count}</span>
            </div>
            <div className="flex items-center me-4">
                <label htmlFor={item.id} className={`${item.isCompleted &&  'line-through'}  text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`}>
                    Complete
                    <input checked={item.isCompleted} className=" ms-2 text-sm font-medium  dark:text-gray-300" id={item.id} onChange={() => dispatch(completeProduct(item))} type="checkbox" value=""/>
                </label>
            </div>
            <button type="button" onClick={() => dispatch(removeProduct(item.id))} className="text-custom_warning hover:text-custom_blue font-extrabold"> X</button>
            
        </li>
    )
    })

    return(
        <section className="px-11 py-3 bg-custom_blue">
            <ul className="bg-white">
               {renderProduct}
            </ul>
        </section>
    )
}
export default ProductList;