import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { AddPostComponent } from "./add-post/add-post.component";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { PostsListComponent } from "./posts-list/posts-list.component";


const routes: Routes = [
  {
    path: '', component: PostsListComponent, children: [{
      path: 'add', component: AddPostComponent
    },
    { path: 'edit/:id', component: EditPostComponent },]
  }
];

@NgModule({
  imports: [ReactiveFormsModule, FormsModule,CommonModule, RouterModule.forChild(routes)],
  declarations: [
    PostsListComponent,
    AddPostComponent,
    EditPostComponent
  ],
})

export class PostsModule {
}
