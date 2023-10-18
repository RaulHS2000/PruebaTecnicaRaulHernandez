import { Test, TestingModule } from '@nestjs/testing';
import { TiposPaquetesService } from './tipos_paquetes.service';

describe('TiposPaquetesService', () => {
  let service: TiposPaquetesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiposPaquetesService],
    }).compile();

    service = module.get<TiposPaquetesService>(TiposPaquetesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
