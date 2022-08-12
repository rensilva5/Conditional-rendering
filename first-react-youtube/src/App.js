import React, {useState, useRef, useEffect} from 'react';
//import './App.css';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef

  useEffect (() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify (todos))
  })
  function handleAppTodo (e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id 1, name: name, complete: flase}]
    })
    todoNameRef.current.value = null
  
  }
  return (
    <>
    <TodoList todos={todos} />
    <input ref={todoNameRef} type="text" />
    <button onClick={handleAddTodo}>Add Todo</button>
    <button>Clear Complete<button/>
    <div>O left to do</div>
    </>
  )
}


export default App;
