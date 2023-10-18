import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmpresasTransporte } from '../../Entity/empresas_transporte.entity';

@Injectable()
export class EmpresasTransporteService {
    constructor(
        @InjectRepository(EmpresasTransporte)
        private readonly empresasTransporteRepository: Repository<EmpresasTransporte>,
      ) { }
    
      //LISTADO GENERAL
      findAll(): Promise<EmpresasTransporte[]> {
        return this.empresasTransporteRepository.find();
      }

      //DETAIL
      findOne(id: number) {
        return this.empresasTransporteRepository.findOne({ where: { id } });
      }

      //CREACION
      create(empresasTransporteData: EmpresasTransporte) {
        return this.empresasTransporteRepository.save(empresasTransporteData);
      }

      //UPDATE
      update(id: number, empresasTransporteData: EmpresasTransporte) {
        return this.empresasTransporteRepository.update(id, empresasTransporteData);
      }

      //DELETE
      remove(id: number) {
        return this.empresasTransporteRepository.delete(id);
      }

}
