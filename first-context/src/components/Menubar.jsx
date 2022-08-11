import { useContext } from "react";
import { UserInfoContex } from "../App";
import Login from "./Login";
import Logout from "./Logout";
export default function Menubar (){
    const {isLoggedIn} = useContext(UserInfoContex)
    return (isLoggedIn? <Logout/> : <Login/>)
}