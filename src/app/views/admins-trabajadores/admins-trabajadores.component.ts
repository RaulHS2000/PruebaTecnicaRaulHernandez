import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-admins-trabajadores',
  templateUrl: './admins-trabajadores.component.html',
  styleUrls: ['./admins-trabajadores.component.css']
})
export class AdminsTrabajadoresComponent {
  displayedColumns = ['nombre', 'apellido', 'email'];
  usuarios: any = [];
  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {
    this.usuariosService.getUsuarios().subscribe((dataSource) => {
      this.usuarios = dataSource;
    });
  }
}

