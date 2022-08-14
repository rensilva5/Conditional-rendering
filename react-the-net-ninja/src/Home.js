import { useState } from 'react'

const Home = () => {

    // let name = "mario"
    const [name, setName ] = useState ('Pirlo')
    const [age, setAge] = useState (42)

    const handleClick = () => {
        setName ('Materazzi')
        setAge (35)
    
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is { age } years old </p>
            <button onClick={ handleClick }>Click me</button>
            {/* <button onClick={ (e) => handleClickAgain('mario', e)}>Click me again</button> */}


        </div>
     );
}
 
export default Home;