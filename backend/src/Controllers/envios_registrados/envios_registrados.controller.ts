import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { EnviosRegistradosService } from '../../Services/envios_registrados/envios_registrados.service';
import { EnviosRegistrados } from '../../Entity/envios_registrados.entity';

@Controller('envios_registrados')
export class EnviosRegistradosController {
    constructor(private readonly enviosRegistradosService: EnviosRegistradosService) { }

    //LISTADO GENERAL
    @Get()
    findAll() {
        return this.enviosRegistradosService.findAll();
    }

    //CREACION DE UN NUEVO ENVIO
    @Post()
    create(@Body() enviosRegistradosData: EnviosRegistrados) {
        return this.enviosRegistradosService.create(enviosRegistradosData);
    }

    //BORRADO DE UN ENVIO
    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.enviosRegistradosService.remove(id);
    }


}
