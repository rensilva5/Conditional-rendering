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
  const numbers = [1,2,3,4,5,6,7,8,9,0]
  
  return (
    <div className="App">
      <h1>Usernane is: {username !== ''? username : 'Guest'}</h1>
      <h1>Usernane is: {username || 'Guest'}</h1>
      <h1>{
        number.length >0 &&
        <>
        {numbers.map((num)=> {
          return num + '&'
        })}
        <Loaded/>
        <h2>I have {numbers.length} numbers</h2>
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
