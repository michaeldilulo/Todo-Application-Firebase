import React, { useState } from 'react';
import './App.css';

// PROPS - Properties
// STATE - Short term memory (will clear when page is refreshed)
// Can run dynamic JS with JSX (Javascript, X is hybrid with HTML)
// const [todos, setTodos] - const set up variable, list of todos (array), when we use useState hook, we need something to call that will allow us to change the variable (setTodos)
// When we want to change todos, we need to use setTodos

function App() {
  const [todos, setTodos] = useState(['Take Maya for a Walk', 'Take the trash out'])
  // only purpose is to take care of the input, with (') value will always be set to empty string
  const [input, setInput] = useState('')

  const addTodo = (event) => {
    // spread operator spreads out array of todos, input is the new todo
    setTodos([...todos, input])
  }


  return (
    <div className="App">
      <h1>Todo Application with Firebase</h1>
      <input value={input} type="text" onChange={event => setInput(event.target.value)} />
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
