import React from 'react';
import './App.css';

function ListItem({todo, toggle, handleKeyDown, updateTodo, i}) {
    
    return(
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
    )
}

export default ListItem;
