import { useState } from "react";
import Loading from "./Loading"
import Loaded from "./Loaded";

import './App.css';


function App() {
  // const isLoaded = true;
  const [isLoaded, setIsLoaded] = useState(false)
  const [objectExample, setObjectExample] = useState({name:'name of object'})
  const [username, setUsername] = useState('')
  
  // const ternary = isLoaded ? 'yes 😃' : 'no 😢'
  
  return (
    <div className="App">
      <h1>Usernane is: {username !== ''? username : 'Guest'}</h1>
      <h1>Usernane is: {username || 'Guest'}</h1>
      <h1>{
        isLoaded &&
        <>
        this is really loaded
        <Loaded/>
        </>
      }</h1>
      <button onClick={()=> {
        console.log('button clicked')
        setIsLoaded(!isLoaded)
      }}>Change Loaded</button>
      <h1>{objectExample.name}</h1>
      <h1>{isLoaded ? 'yes 😃' : 'no 😢'}</h1>
      {
      isLoaded
      ?
      <Loading/>
      :
      <Loaded/>
    } 
    <h1>isLoaded= {String(isLoaded)}</h1>
    </div>
  );
}

export default App;
