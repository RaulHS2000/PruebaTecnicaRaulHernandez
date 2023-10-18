import { Test, TestingModule } from '@nestjs/testing';
import { EnviosRegistradosController } from './envios_registrados.controller';

describe('EnviosRegistradosController', () => {
  let controller: EnviosRegistradosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnviosRegistradosController],
    }).compile();

    controller = module.get<EnviosRegistradosController>(EnviosRegistradosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
