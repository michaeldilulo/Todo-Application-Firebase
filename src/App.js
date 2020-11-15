import React, { useState } from 'react';
import './App.css';

// PROPS - Properties
// STATE - Short term memory (will clear when page is refreshed)
// Can run dynamic JS with JSX (Javascript, X is hybrid with HTML)
// const [todos, setTodos] - const set up variable, list of todos (array), when we use useState hook, we need something to call that will allow us to change the variable (setTodos)
// When we want to change todos, we need to use setTodos

function App() {
  const [todos, setTodos] = useState(['Take Maya for a Walk', 'Take the trash out'])


  return (
    <div className="App">
      <h1>Todo Application with Firebase</h1>
      <input type="text" />
      <button>Add Todo</button>

      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
