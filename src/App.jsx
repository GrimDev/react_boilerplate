import React from 'react';

// import Home from './views/Home/Home.jsx';
import TodoList from './views/TodoList/TodoList.jsx';

const App = () => (
  <div id="app">
    <TodoList />
  </div>
);

export default function provider() {
  return (
    <App />
  );
}
