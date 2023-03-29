import {
  ActionTypes,
  ChangeRandomCurrencyType,
  SetCurrencyActionType,
  SetCurrentCurrencyActionType,
  SetGettingPeriodType,
  SetHistoricityType,
  SetIncreasedType,
} from './actionsTypes';
import { IncreasedType } from '../types';

export const SetCurrencyAction = (currency: string): SetCurrencyActionType => {
  return {
    type: ActionTypes.SET_CURRENCY,
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

export const SetGettingPeriodAction = (time: number): SetGettingPeriodType => {
  return {
    type: ActionTypes.SET_GETTING_PERIOD,
    payload: time,
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
