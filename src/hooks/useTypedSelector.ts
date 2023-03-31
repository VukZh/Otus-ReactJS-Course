import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { State } from '../state/reducer';

export const useTypedSelector: TypedUseSelectorHook<State> = useSelector;
