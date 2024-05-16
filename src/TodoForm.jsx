import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskBody, setTaskBody] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // Prevent adding empty tasks
    if (!taskTitle.trim() || !taskBody.trim()){
      alert("제목과 내용을 입력하세요")
    } else{
    const newTodo = {
      id: Math.random(),
      title: taskTitle,
      body: taskBody,
      isDone: false
    };
    addTodo(newTodo);
    setTaskTitle("");
    setTaskBody("");
  }
  };

  return (
    <form onSubmit={onSubmitHandler} className='todo-form'>
      <input type="text" value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} placeholder="제목" />
      <input type="text" value={taskBody} onChange={(e) => setTaskBody(e.target.value)} placeholder="내용" />
      <button type="submit">추가하기</button>
    </form>
  );
}

export default TodoForm;
