import { useContext } from "react";
import { UserInfoContex } from "../App";
import Welcome from "./Welcome";
import Guest from "./Guest";

export default function Hero (){
    const {isLoggedIn} = useContext(UserInfoContex)
    return (isLoggedIn? <Welcome/> : <Guest/>)
    
}