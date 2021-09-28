import { compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const loggerMiddleware = (store) => (next) => (action) => {
  console.log('Middleware', store, action);
  return next(action);
};

export default composeWithDevTools(
  applyMiddleware(thunk, loggerMiddleware),
);
