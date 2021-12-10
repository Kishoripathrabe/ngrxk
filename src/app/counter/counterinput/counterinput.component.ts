import { AppState } from 'src/app/store/app.state';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { custominput, textinput } from '../state/counter.actions';
import { getChannelName } from '../state/counter.selectors';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counterinput',
  templateUrl: './counterinput.component.html',
  styleUrls: ['./counterinput.component.css']
})
export class CounterinputComponent implements OnInit {
value:number=0;
channelName$:Observable<String>;
  constructor(private store:Store<AppState>) { }
  ngOnInit(): void {
    this.channelName$ =this.store.select(getChannelName)
  }
onPut(){
  this.store.dispatch(custominput({value:+this.value}))
}
onSetTitle(){
this.store.dispatch(textinput({channelName:'modified_title'}))
  }
}
