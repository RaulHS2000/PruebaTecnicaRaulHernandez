import { Component } from '@angular/core';
import { TiposPaquetesService } from '../../services/tipos_paquetes.service';

@Component({
  selector: 'app-tipos-paquetes',
  templateUrl: './tipos-paquetes.component.html',
  styleUrls: ['./tipos-paquetes.component.css']
})
export class TiposPaquetesComponent {
  displayedColumns = ['tipo', 'intervalo_kg', 'formula_precio'];
  tipos_paquetes: any = [];
  constructor(private tiposPaquetesService: TiposPaquetesService) { }

  ngOnInit() {
    this.tiposPaquetesService.getTiposPaquetes().subscribe((dataSource) => {
      this.tipos_paquetes = dataSource;
    });
  }
}

