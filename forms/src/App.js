import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import { Home } from './pages/Home'
import About from "./pages/About";
import Footer from './components/Footer'
//import Form from "./components/Form";
import Header from "./components/Header";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes >
      
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="*" element={<NotFound/>}/>

    </Routes>
    <Footer/>
    {/* <Header/>
    <Home/>
    <About/>
    <Contact/>
    <Footer/> */}
    </BrowserRouter>
  )
}

const NotFound = () => {
  return (
    <>
    <h3>Not foud</h3>
    </>
  )
}
export default App;
