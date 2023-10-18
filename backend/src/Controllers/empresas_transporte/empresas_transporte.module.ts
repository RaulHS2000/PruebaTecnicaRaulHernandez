import { Module } from '@nestjs/common';
import { EmpresasTransporteController } from './empresas_transporte.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpresasTransporte } from '../../Entity/empresas_transporte.entity';
import { EmpresasTransporteService } from '../../Services/empresas_transporte/empresas_transporte.service';


@Module({
  imports: [TypeOrmModule.forFeature([EmpresasTransporte])],
  controllers: [EmpresasTransporteController],
  providers: [EmpresasTransporteService],

})
export class EmpresasTransporteModule {}
