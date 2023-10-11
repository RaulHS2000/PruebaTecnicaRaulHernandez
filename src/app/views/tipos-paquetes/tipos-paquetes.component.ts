import { Component } from '@angular/core';

@Component({
  selector: 'app-tipos-paquetes',
  templateUrl: './tipos-paquetes.component.html',
  styleUrls: ['./tipos-paquetes.component.css']
})
export class TiposPaquetesComponent {
  displayedColumns = ['tipo_paquete', 'intervalo_kg', 'formula'];
  dataSource = ELEMENT_DATA;
}

export interface Element {
  tipo_paquete: string;
  intervalo_kg: number;
  formula: string;
}

const ELEMENT_DATA: Element[] = [
  {tipo_paquete: 'Hydrogen', intervalo_kg: 1.0079, formula: 'H'},
  {tipo_paquete: 'Helium', intervalo_kg: 4.0026, formula: 'He'},
  {tipo_paquete: 'Lithium', intervalo_kg: 6.941, formula: 'Li'},
  {tipo_paquete: 'Beryllium', intervalo_kg: 9.0122, formula: 'Be'},
  {tipo_paquete: 'Boron', intervalo_kg: 10.811, formula: 'B'},
  {tipo_paquete: 'Carbon', intervalo_kg: 12.0107, formula: 'C'},
  {tipo_paquete: 'Nitrogen', intervalo_kg: 14.0067, formula: 'N'},
  {tipo_paquete: 'Oxygen', intervalo_kg: 15.9994, formula: 'O'},
];
