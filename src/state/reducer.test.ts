import { ActionTypes, StateType } from './types';
import { reducer } from './reducer';

describe('Reducer tests', () => {
  let state: StateType;
  beforeEach(() => {
    state = {
      data: [],
      top: [],
      topIsLoading: false,
      historicalDataIsLoading: false,
      topError: null,
      historicalDataError: null,
      currency: '',
      timeStep: 'day',
      extendedMode: false,
      range: {
        min: 200,
        max: 300,
      },
    };
  });
  test('set time step test', () => {
    expect(
      reducer(state, {
        type: ActionTypes.SET_TIME_STEP,
        payload: 'hour',
      })
    ).toEqual({
      data: [],
      top: [],
      topIsLoading: false,
      historicalDataIsLoading: false,
      topError: null,
      historicalDataError: null,
      currency: '',
      timeStep: 'hour',
      extendedMode: false,
      range: {
        min: 200,
        max: 300,
      },
    });
  });
  test('change range test', () => {
    expect(
      reducer(state, {
        type: ActionTypes.SET_RANGE,
        payload: { min: 100, max: 200 },
      })
    ).toEqual({
      data: [],
      top: [],
      topIsLoading: false,
      historicalDataIsLoading: false,
      topError: null,
      historicalDataError: null,
      currency: '',
      timeStep: 'day',
      extendedMode: false,
      range: {
        min: 100,
        max: 200,
      },
    });
  });
  test('set extended mode test', () => {
    expect(
      reducer(state, {
        type: ActionTypes.SET_EXTENDED_MODE,
        payload: true,
      })
    ).toEqual({
      data: [],
      top: [],
      topIsLoading: false,
      historicalDataIsLoading: false,
      topError: null,
      historicalDataError: null,
      currency: '',
      timeStep: 'day',
      extendedMode: true,
      range: {
        min: 200,
        max: 300,
      },
    });
  });
  test('set get top currencies test', () => {
    expect(
      reducer(state, {
        type: ActionTypes.GET_TOP_CURRENCIES,
      })
    ).toEqual({
      data: [],
      top: [],
      topIsLoading: true,
      historicalDataIsLoading: false,
      topError: null,
      historicalDataError: null,
      currency: '',
      timeStep: 'day',
      extendedMode: false,
      range: {
        min: 200,
        max: 300,
      },
    });
  });
  test('set get top currencies success test', () => {
    expect(
      reducer(state, {
        type: ActionTypes.GET_TOP_CURRENCIES_SUCCESS,
        payload: [{ name: 'BTC', fullName: 'Bitcoin' }],
      })
    ).toEqual({
      data: [],
      top: [{ name: 'BTC', fullName: 'Bitcoin' }],
      topIsLoading: false,
      historicalDataIsLoading: false,
      topError: null,
      historicalDataError: null,
      currency: '',
      timeStep: 'day',
      extendedMode: false,
      range: {
        min: 200,
        max: 300,
      },
    });
  });
  test('set get top currencies error test', () => {
    expect(
      reducer(state, {
        type: ActionTypes.GET_TOP_CURRENCIES_ERROR,
        payload: 'get top error',
      })
    ).toEqual({
      data: [],
      top: [],
      topIsLoading: false,
      historicalDataIsLoading: false,
      topError: 'get top error',
      historicalDataError: null,
      currency: '',
      timeStep: 'day',
      extendedMode: false,
      range: {
        min: 200,
        max: 300,
      },
    });
  });
  test('get historical data test', () => {
    expect(
      reducer(state, {
        type: ActionTypes.GET_HISTORICAL_DATA,
      })
    ).toEqual({
      data: [],
      top: [],
      topIsLoading: false,
      historicalDataIsLoading: true,
      topError: null,
      historicalDataError: null,
      currency: '',
      timeStep: 'day',
      extendedMode: false,
      range: {
        min: 200,
        max: 300,
      },
    });
  });
  test('get historical data success test', () => {
    expect(
      reducer(state, {
        type: ActionTypes.GET_HISTORICAL_DATA_SUCCESS,
        payload: [
          {
            time: 111,
            high: 222,
            low: 333,
            open: 444,
            close: 555,
          },
        ],
      })
    ).toEqual({
      data: [
        {
          time: 111,
          high: 222,
          low: 333,
          open: 444,
          close: 555,
        },
      ],
      top: [],
      topIsLoading: false,
      historicalDataIsLoading: false,
      topError: null,
      historicalDataError: null,
      currency: '',
      timeStep: 'day',
      extendedMode: false,
      range: {
        min: 200,
        max: 300,
      },
    });
  });
  test('get historical data error test', () => {
    expect(
      reducer(state, {
        type: ActionTypes.GET_HISTORICAL_DATA_ERROR,
        payload: 'get historical data error',
      })
    ).toEqual({
      data: [],
      top: [],
      topIsLoading: false,
      historicalDataIsLoading: false,
      topError: null,
      historicalDataError: 'get historical data error',
      currency: '',
      timeStep: 'day',
      extendedMode: false,
      range: {
        min: 200,
        max: 300,
      },
    });
  });
});
