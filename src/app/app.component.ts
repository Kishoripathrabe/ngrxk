import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './store/app.state';
import { getLoading } from './store/Shared/shared.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngrxdemo';
  showLoading:Observable<boolean>;
  constructor(private store:Store<AppState>){

  }
  ngOnInit(){
    this.showLoading = this.store.select(getLoading);
  }
}
