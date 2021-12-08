import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterinputComponent } from './counterinput.component';

describe('CounterinputComponent', () => {
  let component: CounterinputComponent;
  let fixture: ComponentFixture<CounterinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterinputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
