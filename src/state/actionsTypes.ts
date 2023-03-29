import { IncreasedType } from '../types';

export enum ActionTypes {
  SET_CURRENCY = 'SET_CURRENCY',
  SET_CURRENT_CURRENCY = 'SET_CURRENT_CURRENCY',
  CHANGE_RANDOM_CURRENCY = 'CHANGE_RANDOM_CURRENCY',
  SET_GETTING_PERIOD = 'SET_GETTING_PERIOD',
  SET_INCREASED = 'SET_INCREASED',
  SET_HISTORICITY = 'SET_HISTORICITY',
}

type SetCurrencyActionType = {
  type: ActionTypes.SET_CURRENCY;
  payload: string;
};

type SetCurrentCurrencyActionType = {
  type: ActionTypes.SET_CURRENT_CURRENCY;
  payload: string;
};

type ChangeRandomCurrencyType = {
  type: ActionTypes.CHANGE_RANDOM_CURRENCY;
  payload: number;
};

type SetGettingPeriodType = {
  type: ActionTypes.SET_GETTING_PERIOD;
  payload: number;
};

type SetIncreasedType = {
  type: ActionTypes.SET_INCREASED;
  payload: IncreasedType;
};

type SetHistoricityType = {
  type: ActionTypes.SET_HISTORICITY;
  payload: boolean;
};

export type {
  SetCurrencyActionType,
  SetCurrentCurrencyActionType,
  ChangeRandomCurrencyType,
  SetGettingPeriodType,
  SetIncreasedType,
  SetHistoricityType,
};
