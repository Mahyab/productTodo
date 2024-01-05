import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../../thunks/fetchUser";
interface IUser {
    id:number, 
    name: string
}
interface IinitialStateProps {
    data:Array<IUser>,
    isLoading:boolean,
    error:string | null
}
const initialState:IinitialStateProps = {
    data:[],
    isLoading:false,
    error:null
}
const usersSlice = createSlice({
    name:"users",
    initialState,
    extraReducers(builder) {

        builder.addCase(fetchUsers.pending , (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchUsers.fulfilled ,(state , action)=>{
            state.isLoading = false;
            state.data = action.payload
        })
        builder.addCase(fetchUsers.rejected,(state, action:PayloadAction<string | null>) =>{
            state.isLoading = false ,
            state.error = action.payload
        })
    },
    reducers:{

    }
})
export const usersSliceReducer = usersSlice.reducer;