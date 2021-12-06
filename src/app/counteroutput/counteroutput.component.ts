import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counteroutput',
  templateUrl: './counteroutput.component.html',
  styleUrls: ['./counteroutput.component.css']
})
export class CounteroutputComponent implements OnInit {
  counter =0;
  counter$: Observable<CounterState>;
  constructor(private store: Store<{counter:CounterState}>) { }

  ngOnInit(): void {
   this.counter$ = this.store.select('counter');
    }
  }


