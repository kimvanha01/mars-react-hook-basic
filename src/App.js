import React, { useState } from 'react';
import './App.scss';

function App() {

  const [todoList, setTodoList] = useState(['ha', 'yeu', 'thu']);

  const removeTodo = (index) => {
    const newTodo = [...todoList];

    newTodo.splice(index, 1);
    setTodoList(newTodo);
  }
  return (
    <div className="app" >
      <ul>
        {todoList.map((item, index) => (
          <li onClick={() => removeTodo(index)}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
