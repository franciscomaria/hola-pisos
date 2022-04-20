import { Action, createReducer, on } from '@ngrx/store';
import { HousesModel } from 'src/app/models/houses.model';
import { setHouse, setHouses, setRef, unSetHouse, unSetHouses } from '../actions/houses.actions';

export interface HousesState {
  houses: HousesModel[];
}

export interface HouseState {
  house: HousesModel | null;
}

export interface RefState {
  ref: string | null;
}

export const initialHousesState: HousesState = {
  houses: []
};

export const initialHouseState: HouseState = {
  house: null
};

export const initialRefState: RefState = {
  ref: null
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

const _refReducer = createReducer(
  initialRefState,
  on(setRef, (state, { ref }) => ({ ...state, ref })),
);

export function housesReducer(state: any, action: Action) {
  return _housesReducer(state, action);
}

export function houseReducer(state: any, action: Action) {
  return _houseReducer(state, action);
}

export function refReducer(state: any, action: Action) {
  return _refReducer(state, action);
}
