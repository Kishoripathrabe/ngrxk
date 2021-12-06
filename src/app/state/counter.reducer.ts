import { Action, createReducer, on  } from "@ngrx/store";
import { custominput, decrement, increment, reset, textinput } from "./counter.actions";
import { CounterState, initialState } from "./counter.state";

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
  }),
  on(textinput, (state, action) => {
    console.log(action);
    return { ...state, channelName: action.channelName }
  })
);

export function counterReducer(state: CounterState,action: Action){
  return _counterReducer(state,action);
}
