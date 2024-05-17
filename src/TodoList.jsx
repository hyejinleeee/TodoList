import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ title, todos, setTodos}) {
  return (
    <>
    <h2>{title}</h2>
    <ul>
      {todos.map((todo) => (
        <li key = {todo.id}>
        <TodoItem  todo={todo} setTodos={setTodos}/>
        </li>
      ))}
    </ul>
    </>
  );
}

export default TodoList;
