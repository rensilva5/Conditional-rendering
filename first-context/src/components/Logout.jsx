import { useContext } from "react";
import { UserInfoContex } from "../App";

export default function Logout (){
    const { setUser, setIsLoggedIn } = useContext(UserInfoContex)
    const handleLogout = () => {
        setIsLoggedIn(false)
        setUser(null)
    }
    return <button onClick={handleLogout}>Logout</button>    
}