import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresasTransporteService {

  constructor(private http: HttpClient) { }

  //Funcion para el listado de todas las empresas de transporte
  getEmpresasTransporte() {
    //Incluimos la ruta de nuestra API desarrollada en Nest
    return this.http.get('http://localhost:3000/empresas_transporte');
  }

  //Funcion para crear una nueva empresa
  createEmpresa(datosEmpresa: any): Observable<any> {
    // Configuramos las cabeceras para indicar que enviamos un JSON
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.http.post('http://localhost:3000/empresas_transporte', datosEmpresa, httpOptions);
  }

  //Funcion para editar una empresa
  editarEmpresa(datosEmpresa: any, id: any) {
    // Configuramos las cabeceras para indicar que enviamos un JSON
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.http.put('http://localhost:3000/empresas_transporte/' + id, datosEmpresa, httpOptions);

  }

  //Funcion para eliminar una empresa
  removeEmpresa(id: number): Observable<any> {
    return this.http.delete('http://localhost:3000/empresas_transporte/' + id);
  }
}
