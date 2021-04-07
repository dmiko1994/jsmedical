import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryoshoulderComponent } from './cryoshoulder.component';

describe('CryoshoulderComponent', () => {
  let component: CryoshoulderComponent;
  let fixture: ComponentFixture<CryoshoulderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryoshoulderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryoshoulderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
