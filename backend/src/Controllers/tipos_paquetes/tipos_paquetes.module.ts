import { Module } from '@nestjs/common';
import { TiposPaquetesController } from './tipos_paquetes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TiposPaquetes } from '../../Entity/tipos_paquetes.entity';
import { TiposPaquetesService } from '../../Services/tipos_paquetes/tipos_paquetes.service';


@Module({
  imports: [TypeOrmModule.forFeature([TiposPaquetes])],
  controllers: [TiposPaquetesController],
  providers: [TiposPaquetesService],

})
export class TiposPaquetesModule {}
