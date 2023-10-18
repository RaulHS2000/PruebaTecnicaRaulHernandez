import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TiposPaquetesService {

  constructor(private http: HttpClient) {}

  //Funcion para el listado de todos los tipos de paquetes
  getTiposPaquetes() {
    //Incluimos la ruta de nuestra API desarrollada en Nest
    return this.http.get('http://localhost:3000/tipos_paquetes');
  }
}
