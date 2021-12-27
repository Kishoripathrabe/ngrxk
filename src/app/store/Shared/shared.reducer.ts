import { setLoadingSpinner } from './shared.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { initialState, SharedState } from './shared.state';

const _sharedReducer = createReducer(
  initialState,
  on(setLoadingSpinner, (state, action) => {
    return {
      state,
      showLoading: action.status,
    };
  })
);

export function SharedReducer(state: SharedState , action: Action) {
  return _sharedReducer(state, action);
}
