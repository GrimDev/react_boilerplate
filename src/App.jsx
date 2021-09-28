import React from 'react';
import { Provider } from 'react-redux';

// import Home from './views/Home/Home.jsx';
// import TodoList from './views/TodoList/TodoList.jsx';
import LightSwitcher from './views/LightSwitcher/LightSwitcher.jsx';
import Counter from './views/Counter/Counter.jsx';

import configureStore from './configureStore';

export const store = configureStore();

const App = () => (
  <div id="app">
    <Counter />
  </div>
);

export default function provider() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
