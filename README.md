
## ✅ todo list 

### 1. 프로젝트 소개
working 파트와 done 파트로 나누어진 todo list 만들기

### 2. 프로젝트 기간
2024.05.13 ~ 2024.05.17

### 3. 개발환경
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

### 4. 상세설명
<img width="1103" alt="스크린샷 2024-05-16 오전 10 10 23" src="https://github.com/hyejinleeee/TodoList/assets/159586671/eb7ecffb-22f1-477f-9b72-9447efbb4679">
투두를 추가하면 working 파트에 카드가 생기고 완료버튼을 누르면 done파트로 이동되게 구현하였습니다. <br><br><br>

컴포넌트는 TodoContainer.jsx, TodoForm.jsx, TodoList.jsx, TodoItem.jsx 으로 이루어져있습니다. TodoContainer.jsx에 다른 컴포넌트들이 포함되어있습니다.<br>

TodoContainer<br>
todo데이터 객체, todo추가함수, 삭제버튼과 토글버튼에 대한 이벤트 , todo를 workingtodo과 donetodo으로 필터링(isdone이 false면 working true면 done) <br><br>
TodoForm<br>
TodoContainer로부터 프롭으로받은 콜백함수 addtodo로 새로운 todo객체 를 추가합니다.(객체속성에 id와 todo내용, isdone:false 포함)<br><br>
TodoList<br>
todolist에 프롭으로 working파트는 workingtodo, done파트는 donetodo를 부여합니다.
todolist에서는 각프롭으로받은 투두를 map으로 아이템을 렌더링합니다.<br><br>
삭제버튼과 토글버튼이벤트<br>
삭제버튼은 id를 기준으로 todo를 필터링하고, 토글버튼은 isdone을 기준으로 map을 돌려 해당isdone의 속성을 바꿉니다.삭제나 토글버튼을 누르면 투두배열이 바뀌면서 workingtodos, donetodos도 새로 필터링되고 아이템이 다시 렌더링됩니다. 


