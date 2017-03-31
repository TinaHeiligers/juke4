import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk'

import lyricsReducer from './reducers/lyrics-reducer'
import playerReducer from './reducers/player-reducer'


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

const store = createStore(
  combineReducers({
    lyrics: lyricsReducer,
    player: playerReducer
  }),
  enhancer);

export default store;
