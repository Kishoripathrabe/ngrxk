import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { CounteroutputComponent } from './counteroutput/counteroutput.component';
import { CounterbuttonsComponent } from './counterbuttons/counterbuttons.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/counter.reducer';
import { CounterinputComponent } from './counterinput/counterinput.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounteroutputComponent,
    CounterbuttonsComponent,
    CounterinputComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
     //@ts-ignore
    StoreModule.forRoot({ counter : counterReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
