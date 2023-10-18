import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TiposPaquetes } from '../../Entity/tipos_paquetes.entity';

@Injectable()
export class TiposPaquetesService {
    constructor(
        @InjectRepository(TiposPaquetes)
        private readonly tiposPaquetesRepository: Repository<TiposPaquetes>,
      ) { }
    
      findAll(): Promise<TiposPaquetes[]> {
        return this.tiposPaquetesRepository.find();
      }
    
}
