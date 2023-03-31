import { ThunkDispatch } from 'redux-thunk';
import { State } from '../state/reducer';
import { AnyAction } from 'redux';
import { useDispatch } from 'react-redux';

type TypedDispatch = ThunkDispatch<State, any, AnyAction>;
export const useTypedDispatch = () => useDispatch<TypedDispatch>();
