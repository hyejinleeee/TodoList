import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function TodoContainer() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "할일 1",
      content: "할일 1 내용",
      isDone: false,
    },
  ]);

  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm setTodos={setTodos} />
      <TodoList title="🔥 Working" todos={workingTodos} setTodos={setTodos}/> 
      <TodoList title="✅ Done" todos={doneTodos} setTodos={setTodos}/>     
    </div>
  );
}

export default TodoContainer;
