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

export const unSetHouses = createAction('[Home] unSetHouses');
export const unSetHouse = createAction('[Home] unSetHouse');
