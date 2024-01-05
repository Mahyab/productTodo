import { FormEvent,ChangeEvent, Fragment, useState } from "react";
import { useAppDispatch , useAppSelector } from "../../hooks/reduxHook";
import { addProducts  } from "../../store/slices/products/productsSlice";
import { changeProduct , changeCount } from "../../store/slices/products/productsFormSlice";
import ProductErrorMessage from "./ProductErrorMesage";
function ProductForm() {
    const [errorMessage , setErrorMessage] = useState<string>("");

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
        if(!product || product.length == 0){
            setErrorMessage("The product should not be empty")
        }else if(!count || count <= 0) {
            setErrorMessage("The count should not be less than or 0 :)")
        }
        else{
            dispatch(addProducts({product, count ,isCompleted}));
            setErrorMessage('')

        }
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
     <Fragment>
        <div className="py-4  flex items-center flex-wrap 2xl:container bg-white">
        <form className="" onSubmit={handleProductSubmit}>
            <input  className="bg-custom_brown p-1 mx-3 my-2 border-2  border-custom_brown"  type="text"  value={product} onChange={handleProduct}/>
            <input className="bg-custom_cerem p-1 mx-3 my-2 border-2  border-custom_cerem" type="number" value={count } onChange={handleProductCount}/>
            <button  className="bg-custom_cerem p-1 border-2 border-custom_cerem hover:border-2 hover:bg-white hover:cursor-pointer transition-all shadow-[1px_1px_5px_0px_rgba(0,0,0,0.5)]  hover:translate-x-2 " type="submit"> Submit</button>
        </form>
        {errorMessage && <ProductErrorMessage errorMessage={errorMessage}/>}

        </div>
  
     </Fragment>

    )
}
export default ProductForm