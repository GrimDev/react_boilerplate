import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { I18nextProvider, useTranslation } from 'react-i18next';
import needsConnection from './hoc/needsConnection.jsx';

import i18n from './config/i18n';

import Home from './views/Home/Home.jsx';
// import TodoList from './views/TodoList/TodoList.jsx';
import LightSwitcher from './views/LightSwitcher/LightSwitcher.jsx';
import TestApi from './views/TestApi/TestApi.jsx';

import configureStore from './configureStore';

export const store = configureStore();

const App = () => {
  const { t } = useTranslation();
  return (
    <Router>
      <I18nextProvider i18n={i18n}>
        <div id="app">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path={`/${t('url1')}`} component={LightSwitcher} />
            <Route path="/test-api" component={needsConnection(TestApi)} />
          </Switch>
        </div>
      </I18nextProvider>
    </Router>
  );
};

export default function provider() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
