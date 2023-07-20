import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarnAlertComponent } from './warn-alert.component';

describe('WarnAlertComponent', () => {
  let component: WarnAlertComponent;
  let fixture: ComponentFixture<WarnAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarnAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarnAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
