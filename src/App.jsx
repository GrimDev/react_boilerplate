import React from 'react';

import ComposantVue from './ComposantVue.jsx';

const App = () => (
  <div id="test" className="myClass">
    <h1>Titre</h1>
    <ComposantVue />
  </div>
);

export default function provider() {
  return (
    <App />
  );
}
