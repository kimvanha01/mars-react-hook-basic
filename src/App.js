import React, { useState } from 'react';
import './App.scss';
import ColorBox from './components/ColorBox/index';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList/index';

function App() {
  const [todoList, setTodoList] = useState(
    [
      { id: 1, title: 'I love Easy Frontend! 😍 ' },
      { id: 2, title: 'We love Easy Frontend! 🥰 ' },
      { id: 3, title: 'They love Easy Frontend! 🚀 ' },
    ]
  );
  const handleTodoClick = (todo) => {
    console.log(todo)

    const index = todoList.findIndex(x => x.id === todo.id);

    if (index < 0) return

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  const handleTodoOnSubmit = (formValues) => {
    console.log('Form Submit: ', formValues)
    const newTodoList = [...todoList];

    const newTodo = {
      id: todoList.length + 1, // example
      ...formValues,
    }
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }
  return (
    <div className="app" >
      <h1>React Hook Basic</h1>
      <ColorBox />
      <TodoForm onSubmit={handleTodoOnSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;
