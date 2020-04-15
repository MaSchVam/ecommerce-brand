import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReduceer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReduceer, applyMiddleware(...middlewares));

export default store;