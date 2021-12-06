import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { custominput } from '../state/counter.actions';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counterinput',
  templateUrl: './counterinput.component.html',
  styleUrls: ['./counterinput.component.css']
})
export class CounterinputComponent implements OnInit {
value:number=0;
  constructor(private store:Store<{counter:CounterState}>) { }
  ngOnInit(): void {
  }
onPut(){
  this.store.dispatch(custominput({value:+this.value}))
}
}
