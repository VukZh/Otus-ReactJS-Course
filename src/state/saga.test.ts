import { expectSaga } from 'redux-saga-test-plan';
import { currCurrency, getCurrencySaga, selectorPeriod } from './sagas';
import { ActionTypes } from './types';
import { getCurrencyData } from '../services/getCurrencyData';
import * as matchers from 'redux-saga-test-plan/matchers';
import { call, select } from 'redux-saga/effects';
import { throwError } from 'redux-saga-test-plan/providers';

describe('sagas', () => {
  const fakeData = {
    USD: 33333,
  };
  test('test getCurrencySaga', () => {
    return expectSaga(getCurrencySaga)
      .provide([
        [select(selectorPeriod), 3000],
        [select(currCurrency), 'BTC'],
        [call(getCurrencyData, 'BTC'), fakeData],
      ])
      .put({
        type: ActionTypes.GET_CURRENCY_VALUE_SUCCESS,
        payload: fakeData.USD,
      })
      .dispatch({ type: ActionTypes.GET_CURRENCY_VALUE, payload: fakeData })
      .run();
  });

  test('test getCurrencySaga with error', () => {
    const error = new Error('error');
    return expectSaga(getCurrencySaga)
      .provide([
        [select(selectorPeriod), 3000],
        [select(currCurrency), 'BTC'],
        [matchers.call.fn(getCurrencyData), throwError(error)],
      ])
      .put({ type: ActionTypes.GET_CURRENCY_VALUE_ERROR, payload: error })
      .dispatch({ type: ActionTypes.GET_CURRENCY_VALUE, payload: -1 })
      .run();
  });
});
