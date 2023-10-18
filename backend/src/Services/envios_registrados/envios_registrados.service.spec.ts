import { Test, TestingModule } from '@nestjs/testing';
import { EnviosRegistradosService } from './envios_registrados.service';

describe('EnviosRegistradosService', () => {
  let service: EnviosRegistradosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnviosRegistradosService],
    }).compile();

    service = module.get<EnviosRegistradosService>(EnviosRegistradosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
