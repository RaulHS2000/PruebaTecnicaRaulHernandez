import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresasTransporteComponent } from './empresas-transporte.component';

describe('EmpresasTransporteComponent', () => {
  let component: EmpresasTransporteComponent;
  let fixture: ComponentFixture<EmpresasTransporteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpresasTransporteComponent]
    });
    fixture = TestBed.createComponent(EmpresasTransporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
