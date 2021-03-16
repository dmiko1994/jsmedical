import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LymphedemaComponent } from './lymphedema.component';

describe('LymphedemaComponent', () => {
  let component: LymphedemaComponent;
  let fixture: ComponentFixture<LymphedemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LymphedemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LymphedemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
