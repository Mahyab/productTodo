import { useAppSelector  , useAppDispatch} from "../../hooks/reduxHook";
import { completeProduct } from "../../store/slices/productsSlice";
function ProductList() {
    const dispatch = useAppDispatch(); 
    const {data}=useAppSelector((state) => {
        return {
            data:state.products.data
        }
    })
  
    const renderProduct = data.map((item) =>{
    return (
        <li className="flex" key={item.id}>
            <p>{item.product}</p>
            <span>{item.count}</span>
            <div className="flex items-center me-4">
            <input checked={item.isCompleted} id="complete-product-checkbox" onChange={() => dispatch(completeProduct(item))} type="checkbox" value=""/>
                <label htmlFor="complete-product-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">compelet</label>
            </div>
            <button type="button">Delete X</button>
            
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