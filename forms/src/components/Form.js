import { useState, useEffect } from "react";

export default function Form (props) {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [validForm, setValidForm] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [form, setForm] = useState({})

    console.log("props here", props)
  
    useEffect(() => {
      if (form?.title?.length > 3 && form?.description?.length > 10) {
        setValidForm(true);
      } else {
        setValidForm(false);
      }
    }, [form]);
  
    // console.log(title)
    // const formSubmit = async (e) => {}
  
    async function formSubmit(e) {
      e.preventDefault(); // stops the page refresh
      if (!validForm) {
        setErrorMessage("Not a valid form");
        return;
      }
      try {
        const results = await fetch("https://sql.bocacode.com/comments", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });
        console.log(results); //--
  
        const data = await results.json();
  
        console.log(data);
        setFormSubmitted(true);
        setErrorMessage("");
        setValidForm(true);
        // alert('wow! submitted')
      } catch (error) {
        console.error(error);
        setErrorMessage(
          "there was an error submitted your comment " + error.toString()
        );
      }
    }
    const updateForm = (event) => {
     // setForm({ [event.target.name]: event.target.value });
     setForm({...form, [event.target.name]: event.target.value})
    };
  
    return (
      
      <div className="App">
        <form onSubmit={formSubmit}>
          <h1>Comments</h1>
  
          <label>Title: </label>
          <input
            type="text"
            name="title"
            // required
            value={form.title}
            onChange={updateForm}
          />
          <h3>{form.title}</h3>
          {/* this is the description */}
          <label>Description:</label>
          <textarea
            value={form.description}
            name='description'
            required
            onChange= {updateForm}
    
          ></textarea>
  
          <h3>{form.description}</h3>
  
          <label>Author</label>
          <select
            value={form.author}
            name='author'
            required
            onChange={updateForm}
            
          >
            <option value="" selected>
              Choose One
            </option>
            <option value="todd albert">Dortor Todd</option>
            <option value="ludwigson">Ludwigson</option>
            <option value="other">Other</option>
          </select>
          <h3>{form.author}</h3>
  
          {!formSubmitted && <button>Submit form</button>}
  
          {errorMessage && (
            <h1>
              There was an error:
              <br />
              {errorMessage}
            </h1>
          )}
        </form>
      </div>
    );
  }