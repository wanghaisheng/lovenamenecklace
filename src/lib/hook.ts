import { useDispatch, useSelector, useStore } from 'react-redux';
import { TypedUseSelectorHook } from 'react-redux';
import { RootState, AppDispatch, AppStore } from './store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => AppStore = useStore;