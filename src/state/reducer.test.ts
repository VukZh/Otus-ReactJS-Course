import { ActionTypes, StateType } from './types';
import { reducer } from './reducer';

describe('Reducer tests', () => {
  let state: StateType;
  beforeEach(() => {
    state = {
      currency: 0,
      currentCurrency: '',
      increased: undefined,
      historicity: true,
      history: [],
      randomCurrency: 0,
      currencies: ['BTC'],
      isLoading: false,
      error: null,
      period: 3000,
    };
  });
  test('set currencies value test', () => {
    expect(
      reducer(state, {
        type: ActionTypes.SET_CURRENCY_VALUE,
        payload: 111,
      })
    ).toEqual({
      currency: 111,
      currentCurrency: '',
      increased: undefined,
      historicity: true,
      history: [],
      randomCurrency: 0,
      currencies: ['BTC'],
      isLoading: false,
      error: null,
      period: 3000,
    });
  });
  test('change currencies test', () => {
    expect(
      reducer(state, {
        type: ActionTypes.CHANGE_CURRENCY,
        payload: 'ETH',
      })
    ).toEqual({
      currency: 0,
      currentCurrency: 'ETH',
      increased: undefined,
      historicity: true,
      history: [],
      randomCurrency: 0,
      currencies: ['BTC'],
      isLoading: false,
      error: null,
      period: 3000,
    });
  });
  test('set increased test', () => {
    expect(
      reducer(state, {
        type: ActionTypes.SET_INCREASED,
        payload: 'yes',
      })
    ).toEqual({
      currency: 0,
      currentCurrency: '',
      increased: 'yes',
      historicity: true,
      history: [],
      randomCurrency: 0,
      currencies: ['BTC'],
      isLoading: false,
      error: null,
      period: 3000,
    });
  });
  test('set historicity test', () => {
    expect(
      reducer(state, {
        type: ActionTypes.SET_HISTORICITY,
        payload: false,
      })
    ).toEqual({
      currency: 0,
      currentCurrency: '',
      increased: undefined,
      historicity: false,
      history: [],
      randomCurrency: 0,
      currencies: ['BTC'],
      isLoading: false,
      error: null,
      period: 3000,
    });
  });
  test('get currencies value test', () => {
    expect(
      reducer(state, {
        type: ActionTypes.GET_CURRENCY_VALUE,
      })
    ).toEqual({
      currency: 0,
      currentCurrency: '',
      increased: undefined,
      historicity: true,
      history: [],
      randomCurrency: 0,
      currencies: ['BTC'],
      isLoading: true,
      error: null,
      period: 3000,
    });
  });
  test('get currencies value success test', () => {
    expect(
      reducer(state, {
        type: ActionTypes.GET_CURRENCY_VALUE_SUCCESS,
        payload: 222,
      })
    ).toEqual({
      currency: 222,
      currentCurrency: '',
      increased: undefined,
      historicity: true,
      history: [],
      randomCurrency: 0,
      currencies: ['BTC'],
      isLoading: false,
      error: null,
      period: 3000,
    });
  });
  test('get currencies value success test', () => {
    expect(
      reducer(state, {
        type: ActionTypes.GET_CURRENCY_VALUE_ERROR,
        payload: 'something error',
      })
    ).toEqual({
      currency: 0,
      currentCurrency: '',
      increased: undefined,
      historicity: true,
      history: [],
      randomCurrency: 0,
      currencies: ['BTC'],
      isLoading: false,
      error: 'something error',
      period: 3000,
    });
  });
  test('set period test', () => {
    expect(
      reducer(state, {
        type: ActionTypes.SET_PERIOD,
        payload: 1111,
      })
    ).toEqual({
      currency: 0,
      currentCurrency: '',
      increased: undefined,
      historicity: true,
      history: [],
      randomCurrency: 0,
      currencies: ['BTC'],
      isLoading: false,
      error: null,
      period: 1111,
    });
  });
});
