import React, { useState } from 'react';
import './App.css';

// PROPS - Properties
// STATE - Short term memory (will clear when page is refreshed)
// Can run dynamic JS with JSX (Javascript, X is hybrid with HTML)
// const [todos, setTodos] - const set up variable, list of todos (array), when we use useState hook, we need something to call that will allow us to change the variable (setTodos)

function App() {
  const [todos, setTodos] = useState([])


  return (
    <div className="App">
      <h1>Todo Application with Firebase</h1>
      <input type="text" />
      <button>Add Todo</button>

      <ul>
        <li>Take Maya for a Walk</li>
        <li>Take the trash out</li>
      </ul>
    </div>
  );
}

export default App;
