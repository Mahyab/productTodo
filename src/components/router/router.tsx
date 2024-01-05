import * as React from "react";
import UserPage from "../../pages/UserPage";
import ProductPage from "../../pages/productPage";
import ErrorPage from "../errors/ErrorPage";
import App from "../../App";
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        errorElement:<ErrorPage/>
    },
    {
        path:'/users',
        element:<UserPage/>
    },
    {
        path:'/products',
        element:<ProductPage/>
    }
]);
export {router}