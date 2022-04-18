import { Action, createReducer, on } from '@ngrx/store';
import { HousesModel } from 'src/app/models/houses.model';
import { setHouses, unSetHouses } from '../actions/houses.actions';

export interface HousesState {
  houses: HousesModel[] | null;
}

export const initialPeopleState: HousesState = {
  houses: null
};

const _housesReducer = createReducer(
  initialPeopleState,
  on(setHouses, (state, { houses }) => ({ ...state, houses: { ...houses } })),
  on(unSetHouses, state => ({ ...state, houses: null }))
);

export function housesReducer(state: any, action: Action) {
  return _housesReducer(state, action);
}

