import { FormControl, Input, InputLabel } from '@material-ui/core';
import Button from '@material-ui/core/Button/Button';
import React, { useEffect, useState } from 'react';
import './App.css';
import Todo from './Todo';
import db from "./firebase"
import firebase from "firebase"

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data().name })))
    })
  }, [])

  const addTodo = (event) => {
    event.preventDefault()
    db.collection('todos').add({
      name: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
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
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
