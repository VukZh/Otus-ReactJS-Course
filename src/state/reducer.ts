import { ActionsType, ActionTypes, StateType } from './types';

const initialState: StateType = {
  currency: 0,
  currentCurrency: '',
  increased: undefined,
  historicity: true,
  history: [],
  randomCurrency: 0,
  currencies: ['BTC', 'ETH', 'BNB', 'DOT', 'ER~'],
};

export const reducer = (
  state = initialState,
  action: ActionsType
): StateType => {
  switch (action.type) {
    case ActionTypes.SET_CURRENCY_VALUE:
      return { ...state, currency: action.payload };
    case ActionTypes.CHANGE_CURRENCY:
      return { ...state, currentCurrency: action.payload };
    case ActionTypes.SET_CURRENT_CURRENCY:
      if (
        state.historicity &&
        state.history[state.history.length - 1] !== action.payload
      ) {
        const newHistory = [...state.history, action.payload];
        return {
          ...state,
          currentCurrency: action.payload,
          history: newHistory,
        };
      }
      return { ...state, currentCurrency: action.payload };
    case ActionTypes.SET_INCREASED:
      return { ...state, increased: action.payload };
    case ActionTypes.SET_HISTORICITY:
      return { ...state, historicity: action.payload };
    case ActionTypes.CHANGE_RANDOM_CURRENCY:
      if (
        state.historicity &&
        state.currencies[action.payload] !== state.currentCurrency
      ) {
        const newHistory = [...state.history, state.currencies[action.payload]];
        console.log('........ ', action.payload, state.currencies);
        return {
          ...state,
          currentCurrency: state.currencies[action.payload],
          history: newHistory,
        };
      }
      return {
        ...state,
        currentCurrency: state.currencies[action.payload],
      };
    default:
      return state;
  }
};

export type State = ReturnType<typeof reducer>;
