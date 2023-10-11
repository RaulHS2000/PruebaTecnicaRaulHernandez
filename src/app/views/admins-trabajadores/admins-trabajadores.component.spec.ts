import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsTrabajadoresComponent } from './admins-trabajadores.component';

describe('AdminsTrabajadoresComponent', () => {
  let component: AdminsTrabajadoresComponent;
  let fixture: ComponentFixture<AdminsTrabajadoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminsTrabajadoresComponent]
    });
    fixture = TestBed.createComponent(AdminsTrabajadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
