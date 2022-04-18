import { Action, createReducer, on } from '@ngrx/store';
import { HousesModel } from 'src/app/models/houses.model';
import { setHouse, setHouses, unSetHouse, unSetHouses } from '../actions/houses.actions';

export interface HousesState {
  houses: HousesModel[];
}

export interface HouseState {
  house: HousesModel | null;
}

export const initialHousesState: HousesState = {
  houses: []
};

export const initialHouseState: HouseState = {
  house: null
};

const _housesReducer = createReducer(
  initialHousesState,
  on(setHouses, (state, { houses }) => ({ ...state, houses: [...state.houses, ...houses] })),
  on(unSetHouses, state => ({ ...state, houses: [] }))
);

const _houseReducer = createReducer(
  initialHouseState,
  on(setHouse, (state, { house }) => ({ ...state, house: { ...house } })),
  on(unSetHouse, state => ({ ...state, house: null }))
);

export function housesReducer(state: any, action: Action) {
  return _housesReducer(state, action);
}

export function houseReducer(state: any, action: Action) {
  return _houseReducer(state, action);
}
