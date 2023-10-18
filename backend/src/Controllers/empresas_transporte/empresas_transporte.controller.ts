import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { EmpresasTransporteService } from '../../Services/empresas_transporte/empresas_transporte.service';
import { EmpresasTransporte } from '../../Entity/empresas_transporte.entity';

@Controller('empresas_transporte')
export class EmpresasTransporteController {
    constructor(private readonly empresasTransporteService: EmpresasTransporteService) { }

    //LISTADO GENERAL
    @Get()
    findAll() {
        return this.empresasTransporteService.findAll();
    }

    //DETAIL
    @Get(':id')
    findOne(@Param('id') id: number) {
      return this.empresasTransporteService.findOne(id);
    }

    //CREACION DE UNA NUEVA EMPRESA DE TRANSPORTE
    @Post()
    create(@Body() empresasTransporteData: EmpresasTransporte) {
      return this.empresasTransporteService.create(empresasTransporteData);
    }

    //ACTUALIZACION DE UNA EMPRESA DE TRANSPORTE
    @Put(':id')
    update(@Param('id') id: number, @Body() empresasTransporteData: EmpresasTransporte) {
      return this.empresasTransporteService.update(id, empresasTransporteData);
    }

    //BORRADO DE UNA EMPRESA DE TRANSPORTE
    @Delete(':id')
    remove(@Param('id') id: number) {
      return this.empresasTransporteService.remove(id);
    }
}
