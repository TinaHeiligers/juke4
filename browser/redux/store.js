import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers/root-reducer';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk'

// export default createStore(reducer, applyMiddleware(createLogger()) )

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(createLogger(), thunkMiddleware)
);

const store = createStore(reducer, enhancer);

export default store;
