import {
  AddHistoryAction,
  ChangeRandomCurrencyAction,
  SetCurrencyAction,
  SetCurrencyValueAction,
  SetCurrentCurrencyAction,
  SetGettingPeriodAction,
  SetHistoricityAction,
  SetIncreasedAction,
} from './actionCreators';
import { ActionTypes } from './types';

describe('Actions creators tests', () => {
  test('SetCurrencyValueAction test', () => {
    expect(SetCurrencyValueAction(111)).toEqual({
      type: ActionTypes.SET_CURRENCY_VALUE,
      payload: 111,
    });
    expect(SetCurrencyValueAction(111)).not.toEqual({
      type: ActionTypes.SET_CURRENT_CURRENCY,
      payload: 111,
    });
    expect(SetCurrencyValueAction(111)).not.toEqual({
      type: ActionTypes.SET_CURRENCY_VALUE,
      payload: 123,
    });
  });

  test('SetCurrencyAction test', () => {
    expect(SetCurrencyAction('BTC')).toEqual({
      type: ActionTypes.CHANGE_CURRENCY,
      payload: 'BTC',
    });
    expect(SetCurrencyAction('BTC')).not.toEqual({
      type: ActionTypes.SET_CURRENT_CURRENCY,
      payload: 'BTC',
    });
    expect(SetCurrencyAction('BTC')).not.toEqual({
      type: ActionTypes.CHANGE_CURRENCY,
      payload: 'BT',
    });
  });

  test('SetCurrentCurrencyAction test', () => {
    expect(SetCurrentCurrencyAction('BTC')).toEqual({
      type: ActionTypes.SET_CURRENT_CURRENCY,
      payload: 'BTC',
    });
    expect(SetCurrentCurrencyAction('BTC')).not.toEqual({
      type: ActionTypes.CHANGE_CURRENCY,
      payload: 'BTC',
    });
    expect(SetCurrentCurrencyAction('BTC')).not.toEqual({
      type: ActionTypes.SET_CURRENT_CURRENCY,
      payload: 'BT',
    });
  });

  test('ChangeRandomCurrencyAction test', () => {
    expect(ChangeRandomCurrencyAction(11)).toEqual({
      type: ActionTypes.CHANGE_RANDOM_CURRENCY,
      payload: 11,
    });
    expect(ChangeRandomCurrencyAction(11)).not.toEqual({
      type: ActionTypes.SET_CURRENT_CURRENCY,
      payload: 11,
    });
    expect(ChangeRandomCurrencyAction(12)).not.toEqual({
      type: ActionTypes.CHANGE_RANDOM_CURRENCY,
      payload: 11,
    });
  });

  test('SetGettingPeriodAction test', () => {
    expect(SetGettingPeriodAction(15)).toEqual({
      type: ActionTypes.SET_GETTING_PERIOD,
      payload: 15,
    });
    expect(SetGettingPeriodAction(11)).not.toEqual({
      type: ActionTypes.SET_CURRENT_CURRENCY,
      payload: 11,
    });
    expect(SetGettingPeriodAction(5)).not.toEqual({
      type: ActionTypes.SET_GETTING_PERIOD,
      payload: 15,
    });
  });

  test('SetIncreasedAction test', () => {
    expect(SetIncreasedAction('yes')).toEqual({
      type: ActionTypes.SET_INCREASED,
      payload: 'yes',
    });
    expect(SetIncreasedAction('yes')).not.toEqual({
      type: ActionTypes.SET_GETTING_PERIOD,
      payload: 'yes',
    });
    expect(SetIncreasedAction('yes')).not.toEqual({
      type: ActionTypes.SET_INCREASED,
      payload: 'no',
    });
  });

  test('SetHistoricityAction test', () => {
    expect(SetHistoricityAction(true)).toEqual({
      type: ActionTypes.SET_HISTORICITY,
      payload: true,
    });
    expect(SetHistoricityAction(true)).not.toEqual({
      type: ActionTypes.SET_INCREASED,
      payload: true,
    });
    expect(SetHistoricityAction(true)).not.toEqual({
      type: ActionTypes.SET_HISTORICITY,
      payload: false,
    });
  });

  test('AddHistoryAction test', () => {
    expect(AddHistoryAction('ETH')).toEqual({
      type: ActionTypes.ADD_HISTORY,
      payload: 'ETH',
    });
    expect(AddHistoryAction('ETH')).not.toEqual({
      type: ActionTypes.SET_HISTORICITY,
      payload: 'ETH',
    });
    expect(AddHistoryAction('ETH')).not.toEqual({
      type: ActionTypes.ADD_HISTORY,
      payload: 'ETC',
    });
  });
});
