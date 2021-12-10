import { Action, createReducer, on } from '@ngrx/store';
import { addPost } from './posts.action';

import { initialState, PostsState } from "./posts.state";



 const _postsReducer = createReducer(initialState,on(addPost,(state,action)=>{
let post = {...action.post};
post.id =(state.posts.length+1).toString();
return {...state,posts:[...state.posts,post]}
 }))


export function postsReducer (state:PostsState, action:Action){
 return _postsReducer(state, action);
}
