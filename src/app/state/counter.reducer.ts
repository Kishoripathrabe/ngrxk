import { Action, createReducer, on  } from "@ngrx/store";
import { custominput, decrement, increment, reset } from "./counter.actions";
import { initialState } from "./counter.state";

const _counterReducer = createReducer(initialState,
  on(increment,(state)=>{
  return {...state, counter:((state.counter)+1)}
  }),
  on(decrement, (state) => {
    return { ...state, counter: ((state.counter) - 1) }
  }),
  on(reset, (state) => {
    return { ...state, counter: (0) }
  }),
  on(custominput, (state,action) => {
    console.log(action);
    return { ...state, counter: action.value }
  })
);

export function counterReducer(state: { counter: number; },action: Action){
  return _counterReducer(state,action);
}
