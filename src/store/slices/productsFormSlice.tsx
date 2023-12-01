import { createSlice , PayloadAction } from "@reduxjs/toolkit";
import { RooteState } from "..";

    
type TpriductFormInitalState  = {
    product:string,
    count:number,
    isCompleted:boolean
}
const initialState: TpriductFormInitalState = {
    product:"",
    count:0,
    isCompleted:false
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
        changeComplete(state , action:PayloadAction<boolean>) {
            state.isCompleted = action.payload;
        }
    }

});
export const {changeProduct , changeCount , changeComplete} = ProductFormSlice.actions;
export const selsetproductFormProduct = (state:RooteState) => state.productsFrom.product;
export const selectProductFormCount = (state:RooteState) => state.productsFrom.count;
export const selectProductFormComplete = (state:RooteState) => state.productsFrom.isCompleted;
export const productFromReducer = ProductFormSlice.reducer;