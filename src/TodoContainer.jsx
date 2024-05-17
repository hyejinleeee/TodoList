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
    }
  ]);

  const workingTodos = todos.filter(todo => !todo.isDone);
  const doneTodos = todos.filter(todo => todo.isDone);

  return (
    <div>
      <TodoForm setTodos={setTodos} />
      <div>
      <TodoList todos={workingTodos}  />     
      <TodoList todos={doneTodos}  />
      </div>
    </div>
  );
}

export default TodoContainer;
