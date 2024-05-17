import React from 'react';

function TodoItem({ todo, setTodos }) {
  const { id, title, content, isDone } = todo;

  const deleteTodo = () => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleTodo = () => {
    setTodos((prev) =>
    prev.map((todo) =>
    todo.id === id ? {...todo, isDone: !todo.isDone} : todo
  ));
  };

  return (
    <>
      <strong>{title}</strong><br />{content} 
      <button className='del-btn'  onClick={deleteTodo}>삭제</button>
      <button className='toggle-btn' onClick={toggleTodo} >{isDone ? '취소' : '완료'}</button>
    </>
  );
}

export default TodoItem;
     