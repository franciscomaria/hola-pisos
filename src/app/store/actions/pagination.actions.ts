import { createAction, props } from '@ngrx/store';

export const setActive = createAction(
  '[Home] setActive',
  props<{ active: string }>()
);

export const setNext = createAction(
  '[Home] setNext',
  props<{ next: string | null }>()
);

export const setLast = createAction(
  '[Home] setLast',
  props<{ last: string | null}>()
);
