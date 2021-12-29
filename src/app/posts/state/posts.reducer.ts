import { Action, createReducer, on } from '@ngrx/store';
import {  addPostSuccess, deletePost, deletePostSuccess, loadPostsSuccess, updatePost, updatePostSuccess } from './posts.actions';

import { initialState, PostsState } from "./posts.state";



const _postsReducer = createReducer(initialState, on(addPostSuccess, (state, action) => {
  let post = { ...action.post };
  post.id = (state.posts.length + 1).toString();
  return { ...state, posts: [...state.posts, post] }
}),
  on(updatePostSuccess, (state, action) => {
      const updatedPosts = state.posts.map(post => {
        return action.post.id === post.id ? action.post : post;
      });
      return {...state,posts:updatedPosts}
    }),
  on(deletePostSuccess, (state, action) => {
    console.log(action);
    const updatedPosts = state.posts.filter(post => {
      return post.id !== action.id;
    });
    return { ...state, posts: updatedPosts }
  }),on(loadPostsSuccess, (state, action) => {
    return {
      ...state,
      posts: action.posts,
    };
  })
);


export function postsReducer(state: PostsState, action: Action) {
  return _postsReducer(state, action);
}
