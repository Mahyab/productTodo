import React from "react";
import Products from "../components/product/Products";
import ProductList from "../components/product/ProductList";

function ProductPage() {
    return(
        <React.Fragment>
            <Products/>
            <ProductList/> 
        </React.Fragment>
        
    )
}
export default ProductPage;