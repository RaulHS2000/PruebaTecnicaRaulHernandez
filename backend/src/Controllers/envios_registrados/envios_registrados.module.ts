import { Module } from '@nestjs/common';
import { EnviosRegistradosController } from './envios_registrados.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnviosRegistrados } from '../../Entity/envios_registrados.entity';
import { EnviosRegistradosService } from '../../Services/envios_registrados/envios_registrados.service';


@Module({
  imports: [TypeOrmModule.forFeature([EnviosRegistrados])],
  controllers: [EnviosRegistradosController],
  providers: [EnviosRegistradosService],

})
export class EnviosRegistradosModule {}
