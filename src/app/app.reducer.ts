import { ActionReducerMap } from '@ngrx/store';
import * as pagination from './store/reducers/pagination.reducer';
import * as houses from './store/reducers/houses.reducer';

export interface AppState {
  houses: houses.HousesState,
  house: houses.HouseState,
  ref: houses.RefState,
  isLoading: houses.LoadingState,
  activePagination: pagination.ActiveState,
  nextPagination: pagination.NextState,
  lastPagination: pagination.LastState
}

export const appReducers: ActionReducerMap<AppState> = {
  houses: houses.housesReducer,
  house: houses.houseReducer,
  ref: houses.refReducer,
  isLoading: houses.loadingReducer,
  activePagination: pagination.activeReducer,
  nextPagination: pagination.nextReducer,
  lastPagination: pagination.lastReducer,
};
