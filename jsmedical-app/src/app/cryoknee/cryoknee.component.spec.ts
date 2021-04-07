import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryokneeComponent } from './cryoknee.component';

describe('CryokneeComponent', () => {
  let component: CryokneeComponent;
  let fixture: ComponentFixture<CryokneeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryokneeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryokneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
