import {
  call,
  select,
  put,
  take,
  delay,
  all,
  fork,
  takeEvery,
} from 'redux-saga/effects';
import { getCurrencyData } from '../services/getCurrencyData';
import { ActionTypes } from './types';

function* getCurrencySaga(): any {
  yield take(ActionTypes.GET_CURRENCY_VALUE);
  const period = yield select((state) => state.period);
  while (true) {
    try {
      const currentCurrency = yield select((state) => state.currentCurrency);
      const data = yield call(getCurrencyData, currentCurrency);
      yield put({
        type: ActionTypes.GET_CURRENCY_VALUE_SUCCESS,
        payload: data.USD,
      });
    } catch (error) {
      yield put({ type: ActionTypes.GET_CURRENCY_VALUE_ERROR, payload: error });
    }
    yield delay(period);
  }
}

function* saveStateSaga(): any {
  const state = yield select((state) => state);
  window.localStorage.setItem('stateApp', JSON.stringify(state));
}

export function* rootSaga() {
  yield all([
    fork(getCurrencySaga),
    takeEvery(ActionTypes.SAVE_STATE, saveStateSaga),
  ]);
}
