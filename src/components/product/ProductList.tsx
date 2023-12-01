import { useAppDispatch , useAppSelector } from "../../hooks/reduxHook";

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
            <input type="checkbox" checked={item.isCompleted}/>
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