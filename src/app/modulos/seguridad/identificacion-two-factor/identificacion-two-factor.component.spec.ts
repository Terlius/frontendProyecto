import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificacionTwoFactorComponent } from './identificacion-two-factor.component';

describe('IdentificacionTwoFactorComponent', () => {
  let component: IdentificacionTwoFactorComponent;
  let fixture: ComponentFixture<IdentificacionTwoFactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentificacionTwoFactorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdentificacionTwoFactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
