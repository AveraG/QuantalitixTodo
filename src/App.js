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
      createTodo(e, i);
    }
    if (e.key === 'Backspace' && todos[i].content === '') {
      e.preventDefault();
      return removeTodo(i);
    }
  }

  function removeTodo(i) {
    if (i === 0 && todos.length === 1) return;
    setTodos(todos => todos.slice(0, i).concat(todos.slice(i + 1, todos.length)));
    setTimeout(() => {
      document.forms[0].elements[i - 1].focus();
    }, 0);
  }

  function createTodo(e, i) {
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

  function updateTodo(e, i) {
    const newTodos = [...todos];
    newTodos[i].content = e.target.value;
    setTodos(newTodos);
  }

  function toggle(i) {
    const temporaryTodos = [...todos];
    temporaryTodos[i].isComlpleted=!temporaryTodos[i].isComlpleted;
    setTodos(temporaryTodos);
  }

  return (
    <div className="app">
      <div className="header">
        <img src={require("./pictures/cat-checklist.jpg")} className="logo" alt="cat writing" />
      </div>
      <form className="todo-list">
        <ul>
          {todos.map((todo, i) => (
            <div className={`todo ${todo.isComlpleted && 'todo-is-completed'}`}>
              <div className={'checkbox'} onClick={() => toggle(i)}>
                {todo.isCompleted && (
                  <span>&#x2714;</span>
                )}
              </div>
              <input
                type="text"
                value={todo.content}
                onKeyDown={e => handleKeyDown(e, i)}
                onChange={e => updateTodo(e, i)}
              />
            </div>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
