import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { filesReducer } from '../reducers/filesReducer';

const reducers = combineReducers({
  files: filesReducer,
});

const middlewares = [thunk];

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);
