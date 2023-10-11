import { Component } from '@angular/core';

@Component({
  selector: 'app-admins-trabajadores',
  templateUrl: './admins-trabajadores.component.html',
  styleUrls: ['./admins-trabajadores.component.css']
})
export class AdminsTrabajadoresComponent {
  displayedColumns = ['nombre', 'apellido', 'correo'];
  dataSource = ELEMENT_DATA;
}

export interface Element {
  nombre: string;
  apellido: string;
  correo: string;
}

const ELEMENT_DATA: Element[] = [
  {nombre: 'Hydrogen', apellido: '1.0079', correo: 'H'},
  {nombre: 'Helium', apellido: '4.0026', correo: 'He'},
  {nombre: 'Lithium', apellido: '6.941', correo: 'Li'},
  {nombre: 'Beryllium', apellido: '9.0122', correo: 'Be'},
  {nombre: 'Boron', apellido: '10.811', correo: 'B'},
  {nombre: 'Carbon', apellido: '12.0107', correo: 'C'},
  {nombre: 'Nitrogen', apellido: '14.0067', correo: 'N'},
  {nombre: 'Oxygen', apellido: '15.9994', correo: 'O'},
];
