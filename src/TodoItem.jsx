import React from 'react';

function TodoItem({ todo, deleteTodo, toggleTodo }) {
  const { id, title, body, isDone } = todo;

  return (
    <li>
      <strong>{title}</strong><br /> {body} <br /><br />
      <button className='del-btn' onClick={() => deleteTodo(id)}>삭제</button>
      <button className='toggle-btn' onClick={() => toggleTodo(id)}>{isDone ? '취소' : '완료'}</button>
    </li>
  );
}

export default TodoItem;
     