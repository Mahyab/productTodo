import { createSlice  , nanoid, PayloadAction } from "@reduxjs/toolkit";
import { RooteState } from "../../..";

type TproductData = {
    id?: string,
    product: string,
    count: number
    isCompleted:boolean
}

interface IinitialStateProps {
    searchTerm:string,
    data:Array<TproductData>
}

const initialState:IinitialStateProps={
    searchTerm:"",
    data:[]
}

const productsSlice  = createSlice({
    name: 'products',
    initialState,
    reducers: {
        changeSearchTerm(state, action:PayloadAction<string>) {
            state.searchTerm = action.payload;
        },
        addProducts(state , action:PayloadAction<TproductData>) {
            // this is about add specific products 
            // the action ====> action.payload == {name:milk, count:5}
            state.data.push({    
                product:action.payload.product,
                count:action.payload.count,
                id:nanoid(),
                isCompleted:false
            })
         },
        removeProduct(state , action) {
            //remove the product
            state.data = state.data.filter((product)=>{
                return product.id !== action.payload;
            });
        },
        completeProduct(state , action:PayloadAction<TproductData>) {
            // tick is the product is completed
            const selectedProduct = state.data.find((product) => product.id === action.payload.id)
            selectedProduct.isCompleted = !selectedProduct?.isCompleted
        }
    }
})

export const {addProducts , removeProduct , completeProduct ,changeSearchTerm } = productsSlice.actions;
export const selectProductSearch = (state: RooteState) => state.products.searchTerm;
export const selectProductData = (state:RooteState) => state.products.data;
export const productsReducer = productsSlice.reducer