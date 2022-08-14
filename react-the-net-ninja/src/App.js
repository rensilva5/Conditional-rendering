import Navbar from './Navbar';
import Home from './Home';

function App() {  
  // const title = 'Welcome to the new blog'
  // const likes = 50
  // const person = { name: 'Renzo', age: 41}
  //const link = "http://www.google.com";
  return (
    <div className="App">
      <Navbar/>
     <div className='Content'>
      <Home/>
      
     </div>

    </div>
  );
}

export default App;
