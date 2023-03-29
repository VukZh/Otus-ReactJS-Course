import { ActionType, StateType } from './types';

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
  action: ActionType
): StateType => {
  switch (action.type) {
    default:
      return state;
  }
};
