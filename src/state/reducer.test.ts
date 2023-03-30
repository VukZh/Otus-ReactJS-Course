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
    };
  });
  test('set currency value test', () => {
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
    });
  });
  test('change currency test', () => {
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
    });
  });
});
