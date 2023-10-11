import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposPaquetesComponent } from './tipos-paquetes.component';

describe('TiposPaquetesComponent', () => {
  let component: TiposPaquetesComponent;
  let fixture: ComponentFixture<TiposPaquetesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TiposPaquetesComponent]
    });
    fixture = TestBed.createComponent(TiposPaquetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
