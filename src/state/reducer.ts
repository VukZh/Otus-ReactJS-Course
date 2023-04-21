import {CurrenciesActionsType, ActionTypes, StateType} from "./types";

const initialState: StateType = {
  data: [],
  top: [],
  topIsLoading: false,
  historicalDataIsLoading: false,
  topError: null,
  historicalDataError: null,
};

export const reducer = (
  state = initialState,
  action: CurrenciesActionsType
): StateType => {
  switch (action.type) {
    case ActionTypes.GET_TOP_CURRENCIES:
      return { ...state, topIsLoading: true, topError: null };
    case ActionTypes.GET_TOP_CURRENCIES_SUCCESS:
      return { ...state, top: action.payload, topIsLoading: false, topError: null };
    case ActionTypes.GET_TOP_CURRENCIES_ERROR:
      return { ...state, topIsLoading: false, topError: action.payload };
    case ActionTypes.GET_HISTORICAL_DATA:
      return { ...state, historicalDataIsLoading: true, historicalDataError: null };
    case ActionTypes.GET_HISTORICAL_DATA_SUCCESS:
      return { ...state, data: action.payload, historicalDataIsLoading: false, historicalDataError: null };
    case ActionTypes.GET_HISTORICAL_DATA_ERROR:
      return { ...state, historicalDataIsLoading: false, historicalDataError: action.payload };
    default:
      return state;
  }
};

export type State = ReturnType<typeof reducer>;
