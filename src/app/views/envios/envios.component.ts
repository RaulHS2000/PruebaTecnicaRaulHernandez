import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-envios',
  templateUrl: './envios.component.html',
  styleUrls: ['./envios.component.css']
})
export class EnviosComponent {
  displayedColumns = ['direccion', 'codigo_postal', 'destinatario', 'remitente', 'peso_envio','acciones'];
  dataSource = ELEMENT_DATA; 

  anyadirEnvio() {
    $("#formulario_edicion").css("display", "none");
    $("#formulario_creacion").css("display", "block");
  }

   editarEnvio() {
    $("#formulario_edicion").css("display", "block");
    $("#formulario_creacion").css("display", "none");
    
  }
  
   eliminarEnvio() {
      
  }

}

export interface Element {
  direccion: string;
  codigo_postal: number;
  destinatario: string;
  remitente: string;
  peso_envio: number;
}

const ELEMENT_DATA: Element[] = [
  {direccion: 'Hydrogen', codigo_postal: 1.0079, destinatario: 'H', remitente: 'Paco', peso_envio: 50},
  {direccion: 'Hydrogen', codigo_postal: 1.0079, destinatario: 'H', remitente: 'Paco', peso_envio: 50},
  {direccion: 'Hydrogen', codigo_postal: 1.0079, destinatario: 'H', remitente: 'Paco', peso_envio: 50},
  {direccion: 'Hydrogen', codigo_postal: 1.0079, destinatario: 'H', remitente: 'Paco', peso_envio: 50},
  {direccion: 'Hydrogen', codigo_postal: 1.0079, destinatario: 'H', remitente: 'Paco', peso_envio: 50},
  {direccion: 'Hydrogen', codigo_postal: 1.0079, destinatario: 'H', remitente: 'Paco', peso_envio: 50},
  {direccion: 'Hydrogen', codigo_postal: 1.0079, destinatario: 'H', remitente: 'Paco', peso_envio: 50},
  {direccion: 'Hydrogen', codigo_postal: 1.0079, destinatario: 'H', remitente: 'Paco', peso_envio: 50},
];


