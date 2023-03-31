import { ActionsType, ActionTypes } from './types';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { State } from './reducer';
import { getCurrencyData } from '../services/getCurrencyData';

export function getCurrency(
  currency: string
): ThunkAction<void, State, null, ActionsType> {
  return (dispatch: ThunkDispatch<State, undefined, ActionsType>) => {
    try {
      dispatch({ type: ActionTypes.SET_CURRENT_CURRENCY, payload: currency });
      dispatch({ type: ActionTypes.GET_CURRENCY_VALUE });
      getCurrencyData(currency).then((data) =>
        dispatch({
          type: ActionTypes.GET_CURRENCY_VALUE_SUCCESS,
          payload: data.USD,
        })
      );
    } catch (error) {
      dispatch({
        type: ActionTypes.GET_CURRENCY_VALUE_ERROR,
        payload: error,
      });
    }
  };
}
