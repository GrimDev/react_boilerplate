import { createStore } from 'redux';

import reducers from './redux/reducers';
import middlewares from './redux/middlewares';

export default () => createStore(reducers, {}, middlewares);
