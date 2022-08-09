import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [formSubmitted,setFormSubmitted] = useState(false)
  const [validForm,setValidForm] = useState(false)
  const [errorMessage,setErrorMessage] = useState('')
  const [title,setTitle] = useState('')
  const [description, setDescription] = useState('your description')
  const [author,setAuthor] = useState('todd albert')

  useEffect(() => {
    // fetch stuff
    if (title.length > 3 && description.length > 10) {
      setValidForm(true)
    } else {
      setValidForm(false)
    }
  }, [title, description, author])

  // console.log(title)

  // const formSubmit = async (e) => {}

  async function formSubmit(e) {
    e.preventDefault()
    if (!validForm) {
      setErrorMessage('Not a valid form')
      return
    }
    
   try { 
    console.log('form submitted')
   
    // 
    // const comment = {
    //     title:title,
    //     description: description,
    //     author: author,
  
    //   }
    const comment = {
      title,
      description,
      author,
    }
    console.log('form submitted', comment)


    //really submitted to an API
    const results = await fetch('https://sql.bocacode.com/comments', {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(comment)
    })
    console.log(results)

    const data = await results.json()
    
    console.log(data)
    setFormSubmitted(true)
    setErrorMessage('')
    setValidForm(true)
    // alert('wow! submitted')

  }catch (error) {
      console.error(error)
      setErrorMessage('there was an error submitted your comment ' + error.toString())
  }
     }

  console.log(title)
  return (
    <div className='App'>

      <form onSubmit={formSubmit}>
        <h1>Comments</h1>
        
        {/* here goes the title */}

        <label>Title: </label>
        <input type='text'
        // required
        value={title}
        onChange={(e)=>{setTitle(e.target.value)}}
        />
        <h3>{title}</h3>
        {/* this is the description */}
        <label>Description:</label>
        <textarea
        value={description}
        required
        onChange={(e)=>{setDescription(e.target.value)}}></textarea>
        
        <h3>{description}</h3>

        {/* This is the author */}
        <label>Author</label>
        <select value={author}
          onChange={(e) => {setAuthor(e.target.value)}}>
          <option value='' selected>Choose One</option>
          <option value='todd albert'>Dortor Todd</option>
          <option value='ludwigson'>Ludwigson</option>
          <option value='other'>Other</option>
        </select>
        <h3>{author}</h3>

        {!formSubmitted && 
            <button>Submit form</button>
        }

        {errorMessage &&
        <h1>There was an error:<br />{errorMessage}</h1>
        }

      </form>
    </div>    
  )
}
export default App;
