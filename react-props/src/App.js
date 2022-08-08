import React, {useState} from 'react';
import Menubar from './components/Menubar';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [name, setName] = useState('Peter')
  return (
    <>
      <Menubar/>
      <Main
      name={name}
      fruit="Banana"
      total={23}
      isAmazing={true}/>
      <Footer/>
    </>
  );
}

export default App;
