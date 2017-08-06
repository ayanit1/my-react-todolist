import React from 'react';
import AddTodo from './components/addTodo';
import './App.css';

const App = () => (
  <div>
    <h1>Todo list</h1>
    <AddTodo submitTodo={() => {}} />
  </div>
);

export default App;
