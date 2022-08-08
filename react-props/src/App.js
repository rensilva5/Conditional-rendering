import React, {useState} from 'react';
import Menubar from './components/Menubar';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [name, setName] = useState('Peter')
  return (
    <>
      <Menubar name={name} setName={setName}/>
      <Main name={name} setName/>  
      {/* {student} setStudent */}
      {/* <Main name="Mateo"/>
      <Main name="Pam"/>
      <Main name="Derek"/> */}
      <Footer/>
    </>
  );
}

export default App;
