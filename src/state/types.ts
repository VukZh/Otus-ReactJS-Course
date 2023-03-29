import { IncreasedType } from '../types';

export enum ActionTypes {
  CHANGE_CURRENCY = 'CHANGE_CURRENCY',
  SET_CURRENT_CURRENCY = 'SET_CURRENT_CURRENCY',
  CHANGE_RANDOM_CURRENCY = 'CHANGE_RANDOM_CURRENCY',
  SET_GETTING_PERIOD = 'SET_GETTING_PERIOD',
  SET_INCREASED = 'SET_INCREASED',
  SET_HISTORICITY = 'SET_HISTORICITY',
}

type ChangeCurrencyActionType = {
  type: ActionTypes.CHANGE_CURRENCY;
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

type StateType = {
  currency: number;
  currentCurrency: string;
  increased: IncreasedType;
  historicity: boolean;
  history: Array<string>;
  randomCurrency: number;
  currencies: Array<string>;
};

export type {
  ChangeCurrencyActionType,
  SetCurrentCurrencyActionType,
  ChangeRandomCurrencyType,
  SetGettingPeriodType,
  SetIncreasedType,
  SetHistoricityType,
  StateType,
};

export type ActionType =
  | ChangeCurrencyActionType
  | SetCurrentCurrencyActionType
  | ChangeRandomCurrencyType
  | SetGettingPeriodType
  | SetIncreasedType
  | SetHistoricityType;
