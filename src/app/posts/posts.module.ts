import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { counterReducer } from "../counter/state/counter.reducer";
import { AddPostComponent } from "./add-post/add-post.component";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { PostsListComponent } from "./posts-list/posts-list.component";
import { PostsEffects } from "./state/posts.effects";
import { postsReducer } from "./state/posts.reducer";
import { POSTS_STATE_NAME } from "./state/posts.selectors";


const routes: Routes = [
  {
    path: '', component: PostsListComponent, children: [{
      path: 'add', component: AddPostComponent
    },
    { path: 'edit/:id', component: EditPostComponent },]
  }
];

@NgModule({
  imports: [ReactiveFormsModule, FormsModule, CommonModule, RouterModule.forChild(routes),EffectsModule.forFeature([PostsEffects]) ,StoreModule.forFeature(POSTS_STATE_NAME,postsReducer)],
  declarations: [
    PostsListComponent,
    AddPostComponent,
    EditPostComponent
  ],
})

export class PostsModule {
}
