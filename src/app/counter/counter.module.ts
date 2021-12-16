import { CounterinputComponent } from './counterinput/counterinput.component';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CounterComponent } from "./counter.component";
import { CounteroutputComponent } from './counteroutput/counteroutput.component';
import { CounterbuttonsComponent } from './counterbuttons/counterbuttons.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '', component: CounterComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
  declarations: [
    CounterComponent,
    CounteroutputComponent,
    CounterbuttonsComponent,
    CounterinputComponent
  ],
})

export class CounterModule {
}
