import { ActionsType, ActionTypes, StateType } from './types';
import { reducer, State } from './reducer';
import { getCurrency } from './asyncActions';
import { ThunkDispatch } from 'redux-thunk/es/types';

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
      isLoading: false,
      error: null,
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
      isLoading: false,
      error: null,
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
    });
  });
  test('get currency value test', () => {
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
    });
  });
  test('get currency value success test', () => {
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
    });
  });
  test('get currency value success test', () => {
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
    });
  });
  test('getCurrency action test', async () => {
    const dispatch = jest.fn() as ThunkDispatch<State, undefined, ActionsType>;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    await getCurrency('ETT')(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: ActionTypes.SET_CURRENT_CURRENCY,
      payload: 'ETT',
    });
    expect(dispatch).toHaveBeenCalledWith({
      type: ActionTypes.GET_CURRENCY_VALUE,
    });
    expect(dispatch).toHaveBeenCalledTimes(2);
  });
});
