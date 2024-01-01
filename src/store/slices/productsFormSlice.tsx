import { createSlice , PayloadAction } from "@reduxjs/toolkit";
import { RooteState } from "..";
import { addProducts } from "./productsSlice";

    
type TpriductFormInitalState  = {
    product:string,
    count:number,
}
const initialState: TpriductFormInitalState = {
    product:"",
    count:0,
}

const ProductFormSlice = createSlice({
    name:"productForm",
    initialState,
    reducers : {
        changeProduct(state, action:PayloadAction<string>) {
            state.product = action.payload;
        },
        changeCount(state, action:PayloadAction<number>) {
            state.count = action.payload;
        }, 
       
    },
    extraReducers(builder) {
        builder.addCase(addProducts , (state) => {
            state.count =  0;
            state.product= "";
        })
    }

});
export const {changeProduct , changeCount} = ProductFormSlice.actions;
export const selsetproductFormProduct = (state:RooteState) => state.productsFrom.product;
export const selectProductFormCount = (state:RooteState) => state.productsFrom.count;
export const productFromReducer = ProductFormSlice.reducer;