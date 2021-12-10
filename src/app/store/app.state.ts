import { PostsState } from './../posts/posts-list/state/posts.state';
import { CounterState } from "../counter/state/counter.state";
import { counterReducer } from '../counter/state/counter.reducer';
import { postsReducer } from '../posts/posts-list/state/posts.reducer';

export interface AppState {
  counter:CounterState,
  posts:PostsState
}

export const appReducer = {
  counter: counterReducer,
  posts: postsReducer
}
