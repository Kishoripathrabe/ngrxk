import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostsState } from "./posts.state";


const getPostsSelector = createFeatureSelector<PostsState>('posts');
export const getPosts = createSelector(getPostsSelector,(state)=>{
  return state.posts;
});
export const getPostById = createSelector(getPostsSelector, (state:any,props:any) => {
  return state.posts.find((post: any)=>post.id === props.id);
});
