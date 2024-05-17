import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function TodoContainer() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    ));
  };  

  const workingTodos = todos.filter(todo => !todo.isDone);
  const doneTodos = todos.filter(todo => todo.isDone);

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <h2>🔥 Working </h2>
      <TodoList todos={workingTodos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
      <h2>✅ Done </h2>
      <TodoList todos={doneTodos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </div>
  );
}

export default TodoContainer;
