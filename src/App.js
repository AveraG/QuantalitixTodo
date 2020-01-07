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

  function handleKeyDown(e, i) {
    if (e.key === 'Enter') {
      createTodoAtIndex(e, i);
    }
  }

  function createTodoAtIndex(e, i) {
    const newTodos = [...todos];
    newTodos.splice(i + 1, 0, {
      content: '',
      isComlpleted: false,
    });
    setTodos(newTodos);
    setTimeout(() => {
      document.forms[0].elements[i + 1].focus();
    }, 0);
  }

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
