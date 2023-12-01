import { TypedUseSelectorHook , useDispatch , useSelector } from "react-redux";
import type { RooteState, AppDispatch } from "../store";

export const useAppDispatch:() => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RooteState> = useSelector;