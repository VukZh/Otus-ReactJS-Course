import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { reducer } from './reducer';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk, sagaMiddleware))
);
export type TypedDispatch = typeof store.dispatch;
