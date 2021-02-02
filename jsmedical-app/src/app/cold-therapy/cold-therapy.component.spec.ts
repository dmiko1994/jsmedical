import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdTherapyComponent } from './cold-therapy.component';

describe('ColdTherapyComponent', () => {
  let component: ColdTherapyComponent;
  let fixture: ComponentFixture<ColdTherapyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColdTherapyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColdTherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
