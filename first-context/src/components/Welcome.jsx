import { useContext } from "react"
import { UserInfoContex } from "../App"

export default function Welcome (){
    const {user} = useContext(UserInfoContex)
    return <h1>Welcome {user.name}!</h1>
}