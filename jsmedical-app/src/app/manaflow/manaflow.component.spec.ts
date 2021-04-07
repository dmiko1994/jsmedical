import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManaflowComponent } from './manaflow.component';

describe('ManaflowComponent', () => {
  let component: ManaflowComponent;
  let fixture: ComponentFixture<ManaflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManaflowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManaflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
