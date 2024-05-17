// 비제어 컴포넌트 

function TodoForm({setTodos}) {
  
  const onSubmit = (e) => {
   e.preventDefault();

   const formData = new FormData(e.target);
   const title = formData.get('title')
   const content = formData.get('content')
   
   if(!title.trim() || !content.trim()){
    return alert("제목과 내용을 입력해주세요.");
   };

   const nextTodo = {
    id: crypto.randomUUID(),
    title: title,
    content:content,
    isDone: false
   }

   //useState의 비동기성
   setTodos((prev)=> [...prev, nextTodo]);

   e.target.reset();
   
  }

  return (
    <div>
    <form onSubmit={onSubmit} className='todo-form'>
      <input type="text" name='title'  placeholder="제목" />
      <input type="text" name='content' placeholder="내용" />
      <button type="submit">추가하기</button>
    </form>
    </div>

  );
}

export default TodoForm;
