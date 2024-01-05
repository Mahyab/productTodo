import { ChangeEvent } from "react";
import { useAppDispatch ,  useAppSelector} from "../../hooks/reduxHook";
import { changeSearchTerm } from "../../store/slices/products/productsSlice";

function ProductSearch() {
    const dispatch = useAppDispatch();
    const searchTerm = useAppSelector((state) => {
        return state.products.searchTerm
    })
    function handleSearchTermChange(event:ChangeEvent<HTMLElement>) {
        dispatch(changeSearchTerm(event.target.value))
    }
    return(
        <form className="p-4  bg-white flex items-center justify-center border-0 lg:text-end text-center">
            <input type="text" className="border-custom_cerem border-2"
            value={searchTerm}
            onChange={handleSearchTermChange}
            />
            <button className="bg-custom_brown border-2 border-custom_brown px-3 focus:border-2 !focus:border-custom_cerem  text-custom_cerem">Search</button>
        </form>
    )
}
export default ProductSearch;