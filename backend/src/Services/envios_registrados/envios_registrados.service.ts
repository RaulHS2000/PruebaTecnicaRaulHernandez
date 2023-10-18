import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EnviosRegistrados } from '../../Entity/envios_registrados.entity';

@Injectable()
export class EnviosRegistradosService {
    constructor(
        @InjectRepository(EnviosRegistrados)
        private readonly enviosRegistradosRepository: Repository<EnviosRegistrados>,
    ) { }

    //LISTADO GENERAL
    findAll(): Promise<EnviosRegistrados[]> {
        return this.enviosRegistradosRepository.find();
    }

    //CREACION
    create(enviosRegistradosData: EnviosRegistrados) {
        return this.enviosRegistradosRepository.save(enviosRegistradosData);
    }

    //DELETE
    remove(id: number) {
        return this.enviosRegistradosRepository.delete(id);
    }

}
