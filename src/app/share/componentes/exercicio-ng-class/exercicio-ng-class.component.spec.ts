import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioNgClassComponent } from './exercicio-ng-class.component';

describe('ExercicioNgClassComponent', () => {
  let component: ExercicioNgClassComponent;
  let fixture: ComponentFixture<ExercicioNgClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercicioNgClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicioNgClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
