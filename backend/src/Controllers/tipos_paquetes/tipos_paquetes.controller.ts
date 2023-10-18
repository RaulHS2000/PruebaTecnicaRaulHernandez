import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TiposPaquetesService } from '../../Services/tipos_paquetes/tipos_paquetes.service';

@Controller('tipos_paquetes')
export class TiposPaquetesController {
    constructor(private readonly tiposPaquetesService: TiposPaquetesService) { }

    @Get()
    findAll() {
        return this.tiposPaquetesService.findAll();
    }
}
