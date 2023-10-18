import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UsuariosService } from '../../Services/usuarios/usuarios.service';

@Controller('usuarios')
export class UsuariosController {
    constructor(private readonly usuariosService: UsuariosService) {}

  @Get()
  findAll() {
    return this.usuariosService.findAll();
  }

  @Post('login')
  verificarRegistro(@Body() data: { email: string, password: string }) {
    return this.usuariosService.login(data.email, data.password);
  }

}
