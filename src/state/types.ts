import { IncreasedType } from '../types';

export enum ActionTypes {
  GET_CURRENCY_VALUE = 'GET_CURRENCY_VALUE',
  GET_CURRENCY_VALUE_SUCCESS = 'GET_CURRENCY_VALUE_SUCCESS',
  GET_CURRENCY_VALUE_ERROR = 'GET_CURRENCY_VALUE_ERROR',
  SET_CURRENCY_VALUE = 'SET_CURRENCY_VALUE',
  CHANGE_CURRENCY = 'CHANGE_CURRENCY',
  SET_CURRENT_CURRENCY = 'SET_CURRENT_CURRENCY',
  CHANGE_RANDOM_CURRENCY = 'CHANGE_RANDOM_CURRENCY',
  SET_GETTING_PERIOD = 'SET_GETTING_PERIOD',
  SET_INCREASED = 'SET_INCREASED',
  SET_HISTORICITY = 'SET_HISTORICITY',
}

type GetCurrencyValueActionType = {
  type: ActionTypes.GET_CURRENCY_VALUE;
};

type SetCurrencyValueActionType = {
  type: ActionTypes.SET_CURRENCY_VALUE;
  payload: number;
};

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

type GetCurrencyValueSuccessType = {
  type: ActionTypes.GET_CURRENCY_VALUE_SUCCESS;
  payload: number;
};

type GetCurrencyValueErrorType = {
  type: ActionTypes.GET_CURRENCY_VALUE_ERROR;
  payload: string;
};

type StateType = {
  currency: number;
  currentCurrency: string;
  increased: IncreasedType;
  historicity: boolean;
  history: Array<string>;
  randomCurrency: number;
  currencies: Array<string>;
  isLoading: boolean;
  error: string | null;
};

export type {
  GetCurrencyValueActionType,
  GetCurrencyValueSuccessType,
  GetCurrencyValueErrorType,
  SetCurrencyValueActionType,
  ChangeCurrencyActionType,
  SetCurrentCurrencyActionType,
  ChangeRandomCurrencyType,
  SetGettingPeriodType,
  SetIncreasedType,
  SetHistoricityType,
  StateType,
};

export type ActionsType =
  | SetCurrencyValueActionType
  | ChangeCurrencyActionType
  | SetCurrentCurrencyActionType
  | ChangeRandomCurrencyType
  | SetGettingPeriodType
  | SetIncreasedType
  | SetHistoricityType
  | GetCurrencyValueActionType
  | GetCurrencyValueSuccessType
  | GetCurrencyValueErrorType;
