import { getTopList } from '../services/getTopList';
import { all, call, fork, put, take } from '@redux-saga/core/effects';
import { ActionTypes } from '../state/types';
import { prepareTopList } from '../utils/prepareTopList';
import { prepareHistoricalData } from '../utils/prepareHistoricalData';
import { getHistoricalData } from '../services/getHistoricalData';

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
  yield take(ActionTypes.GET_HISTORICAL_DATA);
  try {
    const data = yield call(getHistoricalData, 'day', 'BTC');
    yield put({
      type: ActionTypes.GET_HISTORICAL_DATA_SUCCESS,
      payload: prepareHistoricalData(data),
    });
  } catch (error) {
    yield put({ type: ActionTypes.GET_HISTORICAL_DATA_ERROR, payload: error });
  }
}

export function* rootSaga(): Generator<any, void, any> {
  yield all([fork(getTopListSaga), fork(getHistoricalDataSaga)]);
}
