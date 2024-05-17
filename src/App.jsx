import React from 'react';
import './index.css';
import Layout from './Layout';
import TodoContainer from './TodoContainer';

function App() {
  return (
      <Layout>
       <h1>Todo List</h1>
       <TodoContainer />
      </Layout>
  );
}

export default App;
