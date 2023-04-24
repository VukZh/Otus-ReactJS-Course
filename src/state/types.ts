import { CurrenciesTopType, HistoricalDataType } from '../types';
import { Range } from 'react-input-range';

export enum ActionTypes {
  GET_TOP_CURRENCIES = 'GET_TOP_CURRENCIES',
  GET_TOP_CURRENCIES_SUCCESS = 'GET_TOP_CURRENCIES_SUCCESS',
  GET_TOP_CURRENCIES_ERROR = 'GET_TOP_CURRENCIES_ERROR',
  GET_HISTORICAL_DATA = 'GET_HISTORICAL_DATA',
  GET_HISTORICAL_DATA_SUCCESS = 'GET_HISTORICAL_DATA_SUCCESS',
  GET_HISTORICAL_DATA_ERROR = 'GET_HISTORICAL_DATA_ERROR',
  SET_CURRENCY = 'SET_CURRENCY',
  SET_TIME_STEP = 'SET_TIME_STEP',
  SET_EXTENDED_MODE = 'SET_EXTENDED_MODE',
  SET_RANGE = 'SET_RANGE',
}

type TimeStepType = 'minute' | 'hour' | 'day';

type GetTopCurrenciesActionType = {
  type: ActionTypes.GET_TOP_CURRENCIES;
};
type GetTopCurrenciesSuccessActionType = {
  type: ActionTypes.GET_TOP_CURRENCIES_SUCCESS;
  payload: CurrenciesTopType;
};
type GetTopCurrenciesErrorActionType = {
  type: ActionTypes.GET_TOP_CURRENCIES_ERROR;
  payload: string;
};

type GetHistoricalDataActionType = {
  type: ActionTypes.GET_HISTORICAL_DATA;
};
type GetHistoricalDataSuccessActionType = {
  type: ActionTypes.GET_HISTORICAL_DATA_SUCCESS;
  payload: HistoricalDataType;
};
type GetHistoricalDataErrorActionType = {
  type: ActionTypes.GET_HISTORICAL_DATA_ERROR;
  payload: string;
};

type SetCurrencyActionType = {
  type: ActionTypes.SET_CURRENCY;
  payload: string;
};

type SetTimeStepActionType = {
  type: ActionTypes.SET_TIME_STEP;
  payload: TimeStepType;
};

type SetExtendedModeActionType = {
  type: ActionTypes.SET_EXTENDED_MODE;
  payload: boolean;
};

type SetRangeValueActionType = {
  type: ActionTypes.SET_RANGE;
  payload: Range;
};

type StateType = {
  top: CurrenciesTopType;
  data: HistoricalDataType;
  topIsLoading: boolean;
  historicalDataIsLoading: boolean;
  topError: null | string;
  historicalDataError: null | string;
  currency: string;
  timeStep: TimeStepType;
  extendedMode: boolean;
  range: Range;
};

export type {
  StateType,
  GetTopCurrenciesActionType,
  GetHistoricalDataActionType,
  TimeStepType,
};

export type CurrenciesActionsType =
  | GetTopCurrenciesActionType
  | GetTopCurrenciesSuccessActionType
  | GetTopCurrenciesErrorActionType
  | GetHistoricalDataActionType
  | GetHistoricalDataSuccessActionType
  | GetHistoricalDataErrorActionType
  | SetCurrencyActionType
  | SetTimeStepActionType
  | SetExtendedModeActionType
  | SetRangeValueActionType;
