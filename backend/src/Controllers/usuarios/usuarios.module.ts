import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuarios } from '../../Entity/usuarios.entity';
import { UsuariosService } from '../../Services/usuarios/usuarios.service';

@Module({
  imports: [TypeOrmModule.forFeature([Usuarios])],
  controllers: [UsuariosController],
  providers: [UsuariosService],

})
export class UsuariosModule {}
