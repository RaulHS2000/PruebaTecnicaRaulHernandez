import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './Controllers/usuarios/usuarios.module';
import { Usuarios } from './Entity/usuarios.entity';
import { TiposPaquetesModule } from './Controllers/tipos_paquetes/tipos_paquetes.module';
import { TiposPaquetes } from './Entity/tipos_paquetes.entity';
import { EmpresasTransporteModule } from './Controllers/empresas_transporte/empresas_transporte.module';
import { EmpresasTransporte } from './Entity/empresas_transporte.entity';
import { EnviosRegistrados } from './Entity/envios_registrados.entity';
import { EnviosRegistradosModule } from './Controllers/envios_registrados/envios_registrados.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'invent',
      entities: [Usuarios,TiposPaquetes,EmpresasTransporte,EnviosRegistrados],
      synchronize: true,
    }),
    UsuariosModule,
    TiposPaquetesModule,
    EmpresasTransporteModule,
    EnviosRegistradosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
