import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
interface IUser {
    id:number ,
    name: string
}
const fetchUsers = createAsyncThunk("users/fetch", async () :Promise<IUser[]>=>{
    const {data} = await axios.get<IUser[]>("http://localhost:3000/users");
    await pause(2000);
    return data

});

// the development loading state 
const pause = (duration :number) => {
    return new Promise((resolve) =>{
        setTimeout(resolve , duration)
    })
}
export {fetchUsers}