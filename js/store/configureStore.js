import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

const middlewares = [
  thunkMiddleware,
];

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default function configureStore(initialStore) {
  const store = createStoreWithMiddleware(rootReducer, initialStore);
  return store;
}
