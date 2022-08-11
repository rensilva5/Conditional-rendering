import { useState } from "react"
import {initializeApp} from "firebase/app"
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCIBgIPMzAKyScaugFieAzKP5w7WN7SfrQ",
    authDomain: "first-login-rs.firebaseapp.com",
    projectId: "first-login-rs",
    storageBucket: "first-login-rs.appspot.com",
    messagingSenderId: "995443477761",
    appId: "1:995443477761:web:e1e0c43378f81533f65f00"
  }

function Login ({setIsLoggedIn}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSignUp = async () => {
        //connect to firebase project
        const app = initializeApp(firebaseConfig)
        // also connet to Auth
        const auth = getAuth(app);
        //sebd email and pasword to firebas eAuth
        const user = await createUserWithEmailAndPassword(auth, email, password)
            .catch(err => alert (err.message))
        //if all ok
        if (user) {
            console.log(user)
            setIsLoggedIn(true)
        }
        // if error
        // pop up error 
    }
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="email">
                Email:
                <input
                 value={email} onChange={e => setEmail(e.target.value)}
                 name="emamil" type="email" palceholder="youtyhere.com"/>
            </label> <br />
            <label htmlFor="password">
                Password
                <input 
                value={password} onChange={e => setPassword(e.target.value)}
                name="password" type="password"/>
            </label> <br/>
            <button onClick={handleSignUp}>Sign Up</button>
        </form>
    )
}

export default Login