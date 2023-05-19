import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { reducer } from './reducer';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
export type RootState = ReturnType<typeof store.getState>;
export type TypedDispatch = typeof store.dispatch;
