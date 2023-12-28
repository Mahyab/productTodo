import React from "react";
import Products from "../components/product/Products";
import ProductList from "../components/product/ProductList";
import ProductValue from "../components/product/ProductValue";

function ProductPage() {
    return(
        <React.Fragment>
            <Products/>
            <ProductList/>  
            <ProductValue/>
        </React.Fragment>
        
    )
}
export default ProductPage;