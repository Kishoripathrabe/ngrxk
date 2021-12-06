import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { custominput, textinput } from '../state/counter.actions';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counterinput',
  templateUrl: './counterinput.component.html',
  styleUrls: ['./counterinput.component.css']
})
export class CounterinputComponent implements OnInit {
value:number=0;
channelName:String;
  constructor(private store:Store<{counter:CounterState}>) { }
  ngOnInit(): void {
  this.store.select('counter').subscribe(data=>{
    console.log("call me text")
    this.channelName = data.channelName;
  })
  }
onPut(){
  this.store.dispatch(custominput({value:+this.value}))
}
onSetTitle(){
this.store.dispatch(textinput({channelName:'modified_title'}))
  }
}
