import { createAction, props } from '@ngrx/store';
import { HousesModel } from '../../models/houses.model';

export const setHouses = createAction(
  '[Home] setHouses',
  props<{ houses: HousesModel[] }>()
);

export const setHouse = createAction(
  '[Home] setHouse',
  props<{ house: HousesModel }>()
);

export const setRef = createAction(
  '[Home] setRef',
  props<{ ref: string }>()
);

export const setLoading = createAction(
  '[Home] setLoading',
  props<{ isLoading: boolean }>()
);

export const unSetHouses = createAction('[Home] unSetHouses');
export const unSetHouse = createAction('[Home] unSetHouse');
export const unSetRef = createAction('[Home] unSetRef');
