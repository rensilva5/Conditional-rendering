import { useState, createContext } from 'react';
import Menubar from './components/Menubar'
import Hero from './components/Hero'
import './App.css';

export const UserInfoContex = createContext(null)

function App() {
  const [user, setUser] = useState(null)
  const [isLogggedIn, setIsLoggedIn] = useState(false)
  return (
    <UserInfoContex.Provider value={{ user, setUser, isLogggedIn, setIsLoggedIn}}>
    <Menubar/>
    <Hero/>
    </UserInfoContex.Provider>
  );
}

export default App;
