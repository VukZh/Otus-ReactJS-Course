import {
  call,
  select,
  put,
  take,
  delay,
  all,
  fork,
  takeEvery,
  SelectEffect,
} from 'redux-saga/effects';
import { getCurrencyData } from '../services/getCurrencyData';
import { ActionTypes, StateType } from './types';

export const selectorPeriod = (state: StateType) => state.period;
export const currCurrency = (state: StateType) => state.currentCurrency;

export function* getCurrencySaga(): Generator<any, void, any> {
  yield take(ActionTypes.GET_CURRENCY_VALUE);
  const localeData = JSON.parse(window.localStorage.getItem('stateApp'));
  const period = localeData?.period
    ? localeData.period
    : yield select(selectorPeriod);
  while (true) {
    try {
      const currentCurrency = yield select(currCurrency);
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

export function* saveStateSaga(): Generator<SelectEffect, void, any> {
  const state = yield select((state) => state);
  window.localStorage.setItem('stateApp', JSON.stringify(state));
}

export function* rootSaga(): Generator<any, void, any> {
  yield all([
    fork(getCurrencySaga),
    takeEvery(ActionTypes.SAVE_STATE, saveStateSaga),
  ]);
}
