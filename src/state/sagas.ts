import { getTopList } from '../services/getTopList';
import {
  all,
  call,
  fork,
  put,
  select,
  take,
  takeEvery,
} from '@redux-saga/core/effects';
import { ActionTypes, StateType } from './types';
import { prepareTopList } from '../utils/prepareTopList';
import { prepareHistoricalData } from '../utils/prepareHistoricalData';
import { getHistoricalData } from '../services/getHistoricalData';

export const selectorTimeStep = (state: StateType) => state.timeStep;
export const selectorCurrency = (state: StateType) => state.currency;

export function* getTopListSaga(): Generator<any, void, any> {
  yield take(ActionTypes.GET_TOP_CURRENCIES);
  try {
    const data = yield call(getTopList);
    yield put({
      type: ActionTypes.GET_TOP_CURRENCIES_SUCCESS,
      payload: prepareTopList(data),
    });
  } catch (error) {
    yield put({ type: ActionTypes.GET_TOP_CURRENCIES_ERROR, payload: error });
  }
}

export function* getHistoricalDataSaga(): Generator<any, void, any> {
  const currency = yield select(selectorCurrency);
  const step = yield select(selectorTimeStep);
  try {
    const data = yield call(getHistoricalData, step, currency);
    yield put({
      type: ActionTypes.GET_HISTORICAL_DATA_SUCCESS,
      payload: prepareHistoricalData(data),
    });
  } catch (error) {
    yield put({ type: ActionTypes.GET_HISTORICAL_DATA_ERROR, payload: error });
  }
}

export function* rootSaga(): Generator<any, void, any> {
  yield all([
    fork(getTopListSaga),
    takeEvery(ActionTypes.GET_HISTORICAL_DATA, getHistoricalDataSaga),
  ]);
}
