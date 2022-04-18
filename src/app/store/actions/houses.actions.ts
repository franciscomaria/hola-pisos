import { createAction, props } from '@ngrx/store';
import { HousesModel } from 'src/app/models/houses.model';

export const setHouses = createAction(
  '[Home] setHouses',
  props<{ houses: HousesModel[] }>()
);

export const unSetHouses = createAction('[Home] unSetHouses');
