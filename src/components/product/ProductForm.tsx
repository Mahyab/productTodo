import { FormEvent,ChangeEvent } from "react";
import { useAppDispatch , useAppSelector } from "../../hooks/reduxHook";
import { addProducts } from "../../store/slices/productsSlice";
import { changeProduct , changeCount } from "../../store/slices/productsFormSlice";

function ProductForm() {
    const dispatch = useAppDispatch();
    const {product , count ,isCompleted } = useAppSelector(state => {
        return {
            product:state.productsFrom.product,
            count:state.productsFrom.count,
            isCompleted:state.productsFrom.isCompleted
         }
    })
    function handleProductSubmit(event:FormEvent<HTMLFormElement>):void {
        event.preventDefault(); 
        dispatch(addProducts({product, count ,isCompleted}));
        console.log(product , count , isCompleted );
        console.log({product , count ,isCompleted })
    }
    function handleProduct(event:ChangeEvent<HTMLFormElement>) {
        const Product = event.target.value;
        dispatch(changeProduct(Product));
    }
    function handleProductCount(event:ChangeEvent<HTMLFormElement>) {
        const count = event.target.value;
        dispatch(changeCount(count))
    }
     return(
        <form className="py-4  flex items-center flex-wrap 2xl:container bg-white" onSubmit={handleProductSubmit}>
            <input  className="bg-custom_brown p-1 mx-3 my-2" type="text"  value={product} onChange={handleProduct}/>
            <input className="bg-custom_cerem p-1 mx-3 my-2" type="number" value={count } onChange={handleProductCount}/>
            <button  className="bg-custom_cerem p-1  border-ra-2 my-2 mx-3 px-3" type="submit"> Submit</button>
        </form>
    )
}
export default ProductForm