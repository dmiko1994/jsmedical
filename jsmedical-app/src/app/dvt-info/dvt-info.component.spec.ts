import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvtInfoComponent } from './dvt-info.component';

describe('DvtInfoComponent', () => {
  let component: DvtInfoComponent;
  let fixture: ComponentFixture<DvtInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DvtInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DvtInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
