import { CurrenciesTopType, HistoricalDataType } from '@/types';

export enum ActionTypes {
  GET_TOP_CURRENCIES = 'GET_TOP_CURRENCIES',
  GET_TOP_CURRENCIES_SUCCESS = 'GET_TOP_CURRENCIES_SUCCESS',
  GET_TOP_CURRENCIES_ERROR = 'GET_TOP_CURRENCIES_ERROR',
  GET_HISTORICAL_DATA = 'GET_HISTORICAL_DATA',
  GET_HISTORICAL_DATA_SUCCESS = 'GET_HISTORICAL_DATA_SUCCESS',
  GET_HISTORICAL_DATA_ERROR = 'GET_HISTORICAL_DATA_ERROR',
}

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

type StateType = {
  top: CurrenciesTopType;
  data: HistoricalDataType;
  topIsLoading: boolean,
  historicalDataIsLoading: boolean,
  topError: null | string,
  historicalDataError: null | string,
};

export type {
  StateType,
  GetTopCurrenciesActionType,
  GetHistoricalDataActionType,
};

export type CurrenciesActionsType =
  | GetTopCurrenciesActionType
  | GetTopCurrenciesSuccessActionType
  | GetTopCurrenciesErrorActionType
  | GetHistoricalDataActionType
  | GetHistoricalDataSuccessActionType
  | GetHistoricalDataErrorActionType;