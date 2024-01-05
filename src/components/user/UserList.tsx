import { useEffect } from "react";
import { useAppDispatch , useAppSelector } from "../../hooks/reduxHook";
import { fetchUsers  } from "../../store/thunks/fetchUser";
import Button from "../UI/Button";
import { addUser } from "../../store/thunks/addUser";
import UserSkeleton from "./UserSkeleton";
export default function UserList() {
    const dispatch = useAppDispatch();
    const {isLoading , data , error} = useAppSelector((state) => {
        return state.users;
    })
    useEffect(() => {
        dispatch(fetchUsers())
    } , [dispatch]);
    function handleUserAdd() {
        dispatch(addUser())
    }
    if(isLoading) {
        return <UserSkeleton times={5} className="h-10 w-full"/>
    }
    if(error) {
        <div>Erorconfigurationm</div>
    }
    const renderedUsers = data.map((user) => {
        return <div key={user.id} className="mb-2 border-2 border-custom_cerem rounded-custom_border_radius">
            <div className="flex p-2 justify-between items-center cursor-pointer">
                {user.name}
            </div> 
        </div>
    })
    return(
        <div>
            <div className="flex flex-row justify-between m-3">
            <h1 className="m-2 text-xl">Users</h1>
            <Button onClick={handleUserAdd}>+ Add User </Button>
           </div>
             <div>{renderedUsers}</div>
        </div>
       
    )
}