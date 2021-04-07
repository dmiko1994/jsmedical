import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryohipComponent } from './cryohip.component';

describe('CryohipComponent', () => {
  let component: CryohipComponent;
  let fixture: ComponentFixture<CryohipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryohipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryohipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
