import { useState } from "react"

const Home = () => {

    // let name = 'mario'

    const [name, setName] = useState('mario')
    const [age, setAge] = useState(25)

    const handleClick = () => {
        setName('luigi')
        setAge(30)
    }
    // const handleClickAgain = (name, e) => {
    //     console.log(`Hi ${name}`, e.target)
    // }

    return (
        <div className="Home">
        <h2>Homepage</h2>
        <p>{ name } is { age } years old</p>
        <button onClick={handleClick}>Click me</button>
        {/* <button onClick={(e)=> handleClickAgain('mario', e)}> click me again</button> */}
        </div>
    );
}
 
export default Home