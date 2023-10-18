import { Component } from '@angular/core';
import * as $ from 'jquery';
import { EmpresasTransporteService } from '../../services/empresas_transporte.service';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-empresas-transporte',
  templateUrl: './empresas-transporte.component.html',
  styleUrls: ['./empresas-transporte.component.css']
})
export class EmpresasTransporteComponent {

  displayedColumns = ['empresa_transportista', 'codigos_postales', 'acciones'];
  empresas_transporte: any = [];
  createEmpresaForm: FormGroup;
  editEmpresaForm: FormGroup;

  constructor(private empresasTransporteService: EmpresasTransporteService, private formBuilder: FormBuilder) {
    this.createEmpresaForm = this.formBuilder.group({
      empresa_transporte: [''],
      codigos_postales: [''],
    });

    this.editEmpresaForm = this.formBuilder.group({
      empresa_transporte: [''],
      codigos_postales: [''],
    });
   }

  ngOnInit() {
    this.empresasTransporteService.getEmpresasTransporte().subscribe((dataSource) => {
      this.empresas_transporte = dataSource;
      console.log(this.empresas_transporte);
    });
  }

  createEmpresa() {
    $("#formulario_edicion").css("display", "none");
    $("#formulario_creacion").css("display", "block");

     //Obtenemos los datos del formulario de creacion
     this.createEmpresaForm = this.formBuilder.group({
      empresa_transporte: [$('#empresa_transporte').val()],
      codigos_postales: [$('#codigos_postales').val()],
    });

    const datosEmpresa = this.createEmpresaForm.value;

    this.empresasTransporteService.createEmpresa(datosEmpresa).subscribe(
      (respuesta) => {
        console.log('RESPUESTA: ' + JSON.stringify(respuesta));
        //RECARGAMOS EL CONTENIDO DE LA TABLA TRAS HABER CREADO EL NUEVO REGISTRO
        this.empresasTransporteService.getEmpresasTransporte().subscribe((dataSource) => {
          this.empresas_transporte = dataSource;
        });
        this.createEmpresaForm = this.formBuilder.group({
          empresa_transporte: [$('#empresa_transporte').val('')],
          codigos_postales: [$('#codigos_postales').val('')],
        });
      },
      (error) => {
        console.log(error);
      }
    );

  }

  mostrarFormEdit(id: number){
    $("#formulario_edicion").css("display", "block");
    // $("#formulario_creacion").css("display", "none");

    localStorage.setItem('id', id.toString());
  }

  editarEmpresa(id: number) {

       //Obtenemos los datos del formulario de edición
       this.editEmpresaForm = this.formBuilder.group({
        empresa_transporte: [$('#empresa_transporte_edit').val()],
        codigos_postales: [$('#codigos_postales_edit').val()],
      });

      const datosEmpresa = this.editEmpresaForm.value;

      this.empresasTransporteService.editarEmpresa(datosEmpresa, localStorage.getItem('id')).subscribe(
        (respuesta) => {
          console.log('RESPUESTA: ' + respuesta);
          //RECARGAMOS EL CONTENIDO DE LA TABLA TRAS HABER CREADO EL NUEVO REGISTRO
          this.empresasTransporteService.getEmpresasTransporte().subscribe((dataSource) => {
            this.empresas_transporte = dataSource;
          });
          this.editEmpresaForm = this.formBuilder.group({
            empresa_transporte: [$('#empresa_transporte_edit').val('')],
            codigos_postales: [$('#codigos_postales_edit').val('')],
          });
        },
        (error) => {
          console.log(error);
        }
      );

  }

  //ELIMINAR UNA EMPRESA
  eliminarEmpresa(id: number) {
    this.empresasTransporteService.removeEmpresa(id).subscribe(
      () => {
        console.log('Eliminado correctamente')
        //RECARGAMOS EL CONTENIDO DE LA TABLA TRAS HABER ELIMINADO EL REGISTRO
        this.empresasTransporteService.getEmpresasTransporte().subscribe((dataSource) => {
          this.empresas_transporte = dataSource;
        });
      },
      (error) => {
        console.log('No eliminado ' + error)
      }
    );

  }

}




