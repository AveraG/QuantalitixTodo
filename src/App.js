import React, { useState } from 'react';
import './App.css';


function App() {
  const [todos, setTodos] = useState([
    {
      content: 'Feed dog',
      isComlpleted: true,
    },
    {
      content: 'Do dishes',
      isCompleted: false,
    },
    {
      content: 'Complete project',
      isCompleted: false,
    }
  ]);

  return (
    <div className="app">
      <div className="header">
        <img src={require("./pictures/cat-checklist.jpg")} className="logo" alt="cat writing" />
      </div>
      <form className="todo-list">
        <ul>
          {todos.map((todo, i) => (
            <div className="todo">
              <div className="checkbox" />
              <input 
              type="text" 
              value={todo.content}
              onKeyDown={e => handleKeyDown(e, i)} 
              />
            </div>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
