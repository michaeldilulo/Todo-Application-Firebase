import { FormControl, Input, InputLabel } from '@material-ui/core';
import Button from '@material-ui/core/Button/Button';
import React, { useEffect, useState } from 'react';
import './App.css';
import Todo from './Todo';
import db from "./firebase"

// PROPS - Properties
// STATE - Short term memory (will clear when page is refreshed)
// Can run dynamic JS with JSX (Javascript, X is hybrid with HTML)
// const [todos, setTodos] - const set up variable, list of todos (array), when we use useState hook, we need something to call that will allow us to change the variable (setTodos)
// When we want to change todos, we need to use setTodos

function App() {
  const [todos, setTodos] = useState([])
  // only purpose is to take care of the input, with (') value will always be set to empty string
  const [input, setInput] = useState('')

  // When the app loads, we need to listen to database and fetch new todos as they get added / removed
  useEffect(() => {
    // This code fires when app.js loads and never again. Attaches the listener one time
    // setTodos, take a snapshot (like a camera), the docs, than map through the doc, and return me the name of each todo (key)
    db.collection('todos').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().name))
    })
  }, [])

  const addTodo = (event) => {
    // preventDefault() will stop the page from being refreshed
    event.preventDefault()
    // spread operator spreads out array of todos, input is the new todo
    setTodos([...todos, input])
    setInput('')
  }


  return (
    <div className="App">
      <h1>Todo Application with Firebase</h1>
      <form>
        <FormControl>
          <InputLabel>Add New Todo:</InputLabel>
          <Input value={input} type="text" onChange={event => setInput(event.target.value)} />
        </FormControl>
        <Button disabled={!input} variant="contained" color="primary" onClick={addTodo} type="submit">Add Todo</Button>
      </form>

      <ul>
        {todos.map(todo => (
          <Todo name={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
