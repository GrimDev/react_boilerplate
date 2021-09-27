import React from 'react';

import ComposantVue from './components/ComposantVue/ComposantVue.jsx';

const App = () => (
  <div id="test" className="myClass">
    <h2>Titre</h2>
    <ComposantVue />
    <ComposantVue />
    <ComposantVue />
    <ComposantVue />
    <ComposantVue />
  </div>
);

export default function provider() {
  return (
    <App />
  );
}
