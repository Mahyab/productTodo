import ProductForm from "./ProductForm";
import ProductSearch from "./ProductSearch";

function Products() {
    return(
        <>
            <section className="grid lg:grid-cols-[65%_auto] px-11 bg-custom_blue py-4 mx-auto">
                <ProductForm/>
                <ProductSearch/>    
            </section>
        </>
    )
}
export default Products;