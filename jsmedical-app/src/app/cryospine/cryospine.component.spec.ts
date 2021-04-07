import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryospineComponent } from './cryospine.component';

describe('CryospineComponent', () => {
  let component: CryospineComponent;
  let fixture: ComponentFixture<CryospineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryospineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryospineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
