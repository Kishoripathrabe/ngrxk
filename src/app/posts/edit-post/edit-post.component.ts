
import { Post } from 'src/app/models/posts.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { getPostById } from '../state/posts.selectors';
import { updatePost } from '../state/posts.action';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  post: Post;
  postForm: FormGroup;
  constructor(private route:ActivatedRoute ,private store: Store<AppState> , private router:Router) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      const id = params.get("id");
      this.store.select(getPostById,{id}).subscribe(data=>{
        this.post=data;
        this.createForm();
      });
    })
  }
  createForm(){
    this.postForm=new FormGroup({
      title:new FormControl(this.post.title, [
        Validators.required, Validators.minLength(6)
      ]),
      description:new FormControl(this.post.description,[Validators.required,Validators.minLength(10)])
    })
  }
  onUpdatePost() {
   if(!this.postForm.valid){
     return;
   }
   const title = this.postForm.value.title;
   const description = this.postForm.value.description;
   const post: Post={
     id:this.post.id,
     title,
     description
   }
   this.store.dispatch(updatePost({post}));
   this.router.navigate(['posts']);
  }
}
