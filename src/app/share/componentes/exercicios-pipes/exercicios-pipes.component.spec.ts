import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciciosPipesComponent } from './exercicios-pipes.component';

describe('ExerciciosPipesComponent', () => {
  let component: ExerciciosPipesComponent;
  let fixture: ComponentFixture<ExerciciosPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciciosPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciciosPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
