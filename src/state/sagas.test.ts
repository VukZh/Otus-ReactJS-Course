import { expectSaga } from 'redux-saga-test-plan';
import {
  getTopListSaga,
  getHistoricalDataSaga,
  selectorCurrency,
  selectorTimeStep,
} from './sagas';
import { ActionTypes } from './types';
import { getHistoricalData } from '../services/getHistoricalData';
import { getTopList } from '../services/getTopList';
import * as matchers from 'redux-saga-test-plan/matchers';
import { call, select } from 'redux-saga/effects';
import { throwError } from 'redux-saga-test-plan/providers';
import { prepareTopList, TopListType } from '../utils/prepareTopList';
import {
  HistoricalDataType,
  prepareHistoricalData,
} from '../utils/prepareHistoricalData';

describe('sagas', () => {
  const fakeTopListData = {
    Data: [
      {
        CoinInfo: {
          Name: 'BTC',
          FullName: 'Bitcoin',
        },
      },
    ],
    HasWarning: false,
    Message: '',
    MetaData: { Count: 1 },
    RateLimit: {},
    SponsoredData: ['1'],
    Type: 1,
  };
  const fakeHistoricalData = {
    Data: {
      Aggregated: true,
      Data: [
        {
          close: 90,
          conversionSymbol: '',
          conversionType: '',
          high: 100,
          low: 50,
          open: 60,
          time: 90,
          volumefrom: 1,
          volumeto: 2,
        },
      ],
      TimeFrom: 1,
      TimeTo: 2,
    },
    HasWarning: false,
    Message: '',
    RateLimit: {},
    Response: '',
    Type: 1,
  };
  test('test getTopListSaga', () => {
    return expectSaga(getTopListSaga)
      .provide([[call(getTopList), fakeTopListData]])
      .put({
        type: ActionTypes.GET_TOP_CURRENCIES_SUCCESS,
        payload: prepareTopList(fakeTopListData as TopListType),
      })
      .dispatch({
        type: ActionTypes.GET_TOP_CURRENCIES,
        payload: fakeTopListData,
      })
      .run();
  });

  test('test getTopListSaga with error', () => {
    const error = new Error('error');
    return expectSaga(getTopListSaga)
      .provide([[matchers.call.fn(getTopList), throwError(error)]])
      .put({ type: ActionTypes.GET_TOP_CURRENCIES_ERROR, payload: error })
      .dispatch({ type: ActionTypes.GET_TOP_CURRENCIES, payload: -1 })
      .run();
  });

  test('test getHistoricalDataSaga', () => {
    return expectSaga(getHistoricalDataSaga)
      .provide([
        [select(selectorCurrency), 'BTC'],
        [select(selectorTimeStep), 'day'],
        [call(getHistoricalData, 'day', 'BTC'), fakeHistoricalData],
      ])
      .put({
        type: ActionTypes.GET_HISTORICAL_DATA_SUCCESS,
        payload: prepareHistoricalData(
          fakeHistoricalData as HistoricalDataType
        ),
      })
      .dispatch({
        type: ActionTypes.GET_HISTORICAL_DATA,
        payload: fakeHistoricalData,
      })
      .run();
  });

  test('test getHistoricalDataSaga with error', () => {
    const error2 = new Error('error2');
    return expectSaga(getHistoricalDataSaga)
      .provide([
        [select(selectorCurrency), 'BTC'],
        [select(selectorTimeStep), 'day'],
        [matchers.call.fn(getHistoricalData), throwError(error2)],
      ])
      .put({ type: ActionTypes.GET_HISTORICAL_DATA_ERROR, payload: error2 })
      .dispatch({ type: ActionTypes.GET_HISTORICAL_DATA, payload: -1 })
      .run();
  });
});
