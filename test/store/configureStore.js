import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

const logger = createLogger({
  predicate: (getState, action) => isDebuggingInChrome,
  collapsed: true,
  duration: true,
});

let middlewares = [
  thunkMiddleware
];

if (isDebuggingInChrome) {
  middlewares.push(logger);
}

export default function configureStore(initialState) {
  const store = applyMiddleware(
    ...middlewares
  )(createStore)(reducers, initialState);

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  if (isDebuggingInChrome) {
    window.store = store;
  }

  return store;


}
