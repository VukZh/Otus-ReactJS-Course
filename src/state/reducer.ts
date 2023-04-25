import { ActionTypes, CurrenciesActionsType, StateType } from './types';

const initialState: StateType = {
  data: [],
  top: [],
  topIsLoading: false,
  historicalDataIsLoading: false,
  topError: null,
  historicalDataError: null,
  currency: '',
  timeStep: 'day',
  extendedMode: false,
  range: {
    min: 200,
    max: 300,
  },
};

export const reducer = (
  state = initialState,
  action: CurrenciesActionsType
): StateType => {
  switch (action.type) {
    case ActionTypes.GET_TOP_CURRENCIES:
      return { ...state, topIsLoading: true, topError: null };
    case ActionTypes.GET_TOP_CURRENCIES_SUCCESS:
      return {
        ...state,
        top: action.payload,
        topIsLoading: false,
        topError: null,
      };
    case ActionTypes.GET_TOP_CURRENCIES_ERROR:
      return { ...state, topIsLoading: false, topError: action.payload };
    case ActionTypes.GET_HISTORICAL_DATA:
      return {
        ...state,
        historicalDataIsLoading: true,
        historicalDataError: null,
      };
    case ActionTypes.GET_HISTORICAL_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        historicalDataIsLoading: false,
        historicalDataError: null,
      };
    case ActionTypes.GET_HISTORICAL_DATA_ERROR:
      return {
        ...state,
        historicalDataIsLoading: false,
        historicalDataError: action.payload,
      };
    case ActionTypes.SET_CURRENCY:
      return { ...state, currency: action.payload };
    case ActionTypes.SET_TIME_STEP:
      return { ...state, timeStep: action.payload };
    case ActionTypes.SET_EXTENDED_MODE:
      return { ...state, extendedMode: action.payload };
    case ActionTypes.SET_RANGE:
      return { ...state, range: action.payload };
    default:
      return state;
  }
};

export type State = ReturnType<typeof reducer>;
