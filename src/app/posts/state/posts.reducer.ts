import { Action, createReducer, on } from '@ngrx/store';
import { addPost, updatePost } from './posts.action';

import { initialState, PostsState } from "./posts.state";



const _postsReducer = createReducer(initialState, on(addPost, (state, action) => {
  let post = { ...action.post };
  post.id = (state.posts.length + 1).toString();
  return { ...state, posts: [...state.posts, post] }
}),
  on(updatePost, (state, action) => {
      const updatedPosts = state.posts.map(post => {
        return action.post.id === post.id ? action.post : post;
      });
      return {...state,posts:updatedPosts}
    })
)


export function postsReducer(state: PostsState, action: Action) {
  return _postsReducer(state, action);
}
