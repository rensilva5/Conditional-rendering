import { useContext } from "react";
import { UserInfoContex } from "../App";

export default function Login (){
    const { setUser, setIsLoggedIn } = useContext(UserInfoContex)
    const handleLogin = () => {
        setIsLoggedIn(true)
        setUser({ name: 'Jonathan', position: 'Drum', band: 'Lane Branden'})
    }
    return <button onClick={handleLogin}>Login</button>    
}