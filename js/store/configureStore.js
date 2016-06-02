// configureStore.js

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';


import reducers from '../reducers';

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;