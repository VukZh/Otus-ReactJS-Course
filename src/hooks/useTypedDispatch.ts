import {TypedDispatch} from "../state/store";
import {useDispatch} from "react-redux";

type DispatchFunc = () => TypedDispatch;
export const useTypedDispatch: DispatchFunc = useDispatch;