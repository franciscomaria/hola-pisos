import { Action, createReducer, on } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as pagination from '../actions/pagination.actions';

export interface ActiveState {
  active: string;
}

export interface NextState {
  next: string | null;
}

export interface LastState {
  last: string | null;
}

export const initialActiveState: ActiveState = {
  active: environment.urlAPI
};

export const initialNextState: NextState = {
  next: null
};

export const initialPreviousState: LastState = {
  last: null
};

const _activeReducer = createReducer(
  initialActiveState,
  on(pagination.setActive, (state, { active }) => ({ ...state, active }))
);

const _nextReducer = createReducer(
  initialNextState,
  on(pagination.setNext, (state, { next }) => ({ ...state, next })),
);

const _lastReducer = createReducer(
  initialPreviousState,
  on(pagination.setLast, (state, { last }) => ({ ...state, last }))
);

export function activeReducer(state: any, action: Action) {
  return _activeReducer(state, action);
}

export function nextReducer(state: any, action: Action) {
  return _nextReducer(state, action);
}

export function lastReducer(state: any, action: Action) {
  return _lastReducer(state, action);
}
