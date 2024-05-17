import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ title, todos }) {
  return (
    <>
    <h2>{title}</h2>
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todos} />
      ))}
    </ul>
    </>
  );
}

export default TodoList;
