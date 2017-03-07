import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEntrenadorComponent } from './crear-entrenador.component';

describe('CrearEntrenadorComponent', () => {
  let component: CrearEntrenadorComponent;
  let fixture: ComponentFixture<CrearEntrenadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearEntrenadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearEntrenadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
