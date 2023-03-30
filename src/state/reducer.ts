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
    case ActionTypes.SET_INCREASED:
      return { ...state, increased: action.payload };
    case ActionTypes.SET_HISTORICITY:
      return { ...state, historicity: action.payload };
    case ActionTypes.ADD_HISTORY:
      return { ...state, history: [...state.history, action.payload] };
    default:
      return state;
  }
};
