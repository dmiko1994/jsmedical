import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryoankleComponent } from './cryoankle.component';

describe('CryoankleComponent', () => {
  let component: CryoankleComponent;
  let fixture: ComponentFixture<CryoankleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryoankleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryoankleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
