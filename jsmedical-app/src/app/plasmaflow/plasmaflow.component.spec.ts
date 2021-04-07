import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlasmaflowComponent } from './plasmaflow.component';

describe('PlasmaflowComponent', () => {
  let component: PlasmaflowComponent;
  let fixture: ComponentFixture<PlasmaflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlasmaflowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlasmaflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
