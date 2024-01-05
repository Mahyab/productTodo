import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../../thunks/fetchUser";
import { addUser } from "../../thunks/addUser";
interface IUser {
    id:number, 
    name: string,
    city:string,
    age:number
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
        builder.addCase(fetchUsers.fulfilled ,(state , action:PayloadAction<IUser>)=>{
            state.isLoading = false;
            state.data = action.payload
        })
        builder.addCase(fetchUsers.rejected,(state,  action:PayloadAction<string |null>) =>{
            state.isLoading = false ,
            state.error = action.payload
        })
        builder.addCase(addUser.pending , (state) =>{
            state.isLoading = true;
        })
        builder.addCase(addUser.fulfilled , (state ,action:PayloadAction<IUser>) => {
            state.isLoading = false;
            state.data.push(action.payload);
        });
        builder.addCase(addUser.rejected , (state ,  action:PayloadAction<string | null>) =>  {
            state.error = action.payload;
        })
    },
    reducers:{

    }
})
export const usersSliceReducer = usersSlice.reducer;