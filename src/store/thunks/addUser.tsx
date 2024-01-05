import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; 

import {faker} from "@faker-js/faker"
const addUser = createAsyncThunk("users/add", async () =>{
    const response = await axios.post("http://localhost:3000/users" , {
        name:faker.name.fullName(),
        city:faker.location.city,
        age:faker.number.int
    });
    return response.data;
   

});
export {addUser}