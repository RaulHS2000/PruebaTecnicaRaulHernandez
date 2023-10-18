import { Component } from '@angular/core';
import * as $ from 'jquery';
import { EnviosRegistradosService } from 'src/app/services/envios_registrados.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-envios',
  templateUrl: './envios.component.html',
  styleUrls: ['./envios.component.css']
})
export class EnviosComponent {
  displayedColumns = ['direccion', 'codigo_postal', 'destinatario', 'remitente', 'peso', 'precio', 'empresa', 'tipo_paquete', 'acciones',];
  envios_registrados: any = [];
  createEnvioForm: FormGroup;
  empresaEnvio: string = '';
  precioEnvio: number = 0;
  tipo_paquete: string = '';

  constructor(private enviosRegistradosService: EnviosRegistradosService, private formBuilder: FormBuilder) {

    this.createEnvioForm = this.formBuilder.group({
      direccion: [''],
      codigo_postal: [''],
      destinatario: [''],
      remitente: [''],
      peso: [''],
      precio: [''],
      empresa: [''],
      tipo_paquete: ['']
    });
  }

  //LISTADO DE ENVIOS
  ngOnInit() {
    this.enviosRegistradosService.getEnviosRegistrados().subscribe((dataSource) => {
      this.envios_registrados = dataSource;
      console.log(this.envios_registrados);
    });
  }

  //CREAR UN ENVIO
  createEnvio() {

   var codigo = $('#codigo_postal').val();
   console.log(codigo)
    
    switch ($('#codigo_postal').val()) {
      case "15":
      case "16":
      case "17":
      case "18":
      case "19":
        this.empresaEnvio = "Correos";
        break;

      case "20":
      case "21":
      case "22":
      case "23":
      case "24":
      case "25":
        this.empresaEnvio = "Seur";
        break;

      default:
        this.empresaEnvio = "INVENT";
        break;
    }

    // var peso = parseFloat($('#peso').val());

    // if (peso > 0 && peso <= 0.1) {
    //   this.precioEnvio = peso * 5;
    //   this.tipo_paquete = 'Paquete ultra ligero'

    // } else if(peso > 0.1 && peso <= 0.3){
    //   this.precioEnvio = peso * 5 + 1;
    //   this.tipo_paquete = 'Paquete ligero';

    // } else if(peso > 0.3 && peso <= 5){
    //   this.precioEnvio = peso * 10;
    //   this.tipo_paquete = 'Paquete estándar';

    // } else if(peso > 5 && peso <= 10){
    //   this.precioEnvio = peso * 5 + peso + 75;
    //   this.tipo_paquete = 'Paquete pesado';

    // } else if(peso > 10){
    //   this.precioEnvio = (peso - 10) * 7.5 + 130 + peso;
    //   this.tipo_paquete = 'Gran volumen';
    // }

    //Obtenemos los datos del formulario de creacion
    this.createEnvioForm = this.formBuilder.group({
      direccion: [$('#direccion').val()],
      codigo_postal: [$('#codigo_postal').val()],
      destinatario: [$('#destinatario').val()],
      remitente: [$('#remitente').val()],
      peso: [$('#peso').val()],
      precio: [this.precioEnvio],
      empresa: [this.empresaEnvio],
      tipo_paquete: [this.tipo_paquete]
    });

    const datosEnvio = this.createEnvioForm.value;

    this.enviosRegistradosService.createEnvio(datosEnvio).subscribe(
      (respuesta) => {
        console.log('RESPUESTA: ' + JSON.stringify(respuesta));
        //RECARGAMOS EL CONTENIDO DE LA TABLA TRAS HABER CREADO EL NUEVO REGISTRO
        this.enviosRegistradosService.getEnviosRegistrados().subscribe((dataSource) => {
          this.envios_registrados = dataSource;
        });
        this.createEnvioForm = this.formBuilder.group({
          direccion: [$('#direccion').val('')],
          codigo_postal: [$('#codigo_postal').val('')],
          destinatario: [$('#destinatario').val('')],
          remitente: [$('#remitente').val('')],
          peso: [$('#peso').val('')]
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //ELIMINAR UN ENVIO
  eliminarEnvio(id: number) {
    this.enviosRegistradosService.removeEnvio(id).subscribe(
      () => {
        console.log('Eliminado correctamente')
        //RECARGAMOS EL CONTENIDO DE LA TABLA TRAS HABER ELIMINADO EL REGISTRO
        this.enviosRegistradosService.getEnviosRegistrados().subscribe((dataSource) => {
          this.envios_registrados = dataSource;
        });
      },
      (error) => {
        console.log('No eliminado ' + error)
      }
    );
  }

}



