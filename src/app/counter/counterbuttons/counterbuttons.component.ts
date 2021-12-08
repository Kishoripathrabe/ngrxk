import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.actions';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counterbuttons',
  templateUrl: './counterbuttons.component.html',
  styleUrls: ['./counterbuttons.component.css']
})
export class CounterbuttonsComponent implements OnInit {

  constructor(private store: Store<{counter:CounterState}>) { }

  ngOnInit(): void {
  }
  counterUp(){
    this.store.dispatch(increment());
  }
  counterDown(){
    this.store.dispatch(decrement());
  }
  counterMid(){
    this.store.dispatch(reset());
  }

}
