import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EnviosRegistradosService {

    constructor(private http: HttpClient) { }

    //Funcion para el listado de todos los envios registrados
    getEnviosRegistrados() {
        //Incluimos la ruta de nuestra API desarrollada en Nest
        return this.http.get('http://localhost:3000/envios_registrados');
    }

    //Funcion para crear un nuevo envío
    createEnvio(datosEnvio: any): Observable<any> {

        // Configuramos las cabeceras para indicar que enviamos un JSON
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        };

        return this.http.post('http://localhost:3000/envios_registrados', datosEnvio, httpOptions);
    }

    //Funcion para eliminar un envío
    removeEnvio(id: number): Observable<any> {
        return this.http.delete('http://localhost:3000/envios_registrados/' + id);
    }
}
