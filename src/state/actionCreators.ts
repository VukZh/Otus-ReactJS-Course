import {
  ActionTypes,
  ChangeCurrencyActionType,
  ChangeRandomCurrencyType,
  SetCurrencyValueActionType,
  SetCurrentCurrencyActionType,
  SetHistoricityType,
  SetIncreasedType,
  SetPeriodType,
} from './types';
import { IncreasedType } from '../types';

export const SetCurrencyValueAction = (
  value: number
): SetCurrencyValueActionType => {
  return {
    type: ActionTypes.SET_CURRENCY_VALUE,
    payload: value,
  };
};

export const SetCurrencyAction = (
  currency: string
): ChangeCurrencyActionType => {
  return {
    type: ActionTypes.CHANGE_CURRENCY,
    payload: currency,
  };
};

export const SetCurrentCurrencyAction = (
  currency: string
): SetCurrentCurrencyActionType => {
  return {
    type: ActionTypes.SET_CURRENT_CURRENCY,
    payload: currency,
  };
};

export const ChangeRandomCurrencyAction = (
  random: number
): ChangeRandomCurrencyType => {
  return {
    type: ActionTypes.CHANGE_RANDOM_CURRENCY,
    payload: random,
  };
};

export const SetIncreasedAction = (
  increased: IncreasedType
): SetIncreasedType => {
  return {
    type: ActionTypes.SET_INCREASED,
    payload: increased,
  };
};

export const SetHistoricityAction = (
  historicity: boolean
): SetHistoricityType => {
  return {
    type: ActionTypes.SET_HISTORICITY,
    payload: historicity,
  };
};

export const SetPeriodAction = (period: number): SetPeriodType => {
  return {
    type: ActionTypes.SET_PERIOD,
    payload: period,
  };
};
