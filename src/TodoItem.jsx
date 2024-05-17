import React from 'react';

function TodoItem({ todo }) {
  const { id, title, body, isDone } = todo;

  return (
    <li>
      <strong>{toto.title}</strong><br /> {todo.content} <br /><br />
      <button className='del-btn'>삭제</button>
      <button className='toggle-btn'>{isDone ? '취소' : '완료'}</button>
    </li>
  );
}

export default TodoItem;
     