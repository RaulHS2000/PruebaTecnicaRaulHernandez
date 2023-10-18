import { Test, TestingModule } from '@nestjs/testing';
import { TiposPaquetesController } from './tipos_paquetes.controller';

describe('TiposPaquetesController', () => {
  let controller: TiposPaquetesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TiposPaquetesController],
    }).compile();

    controller = module.get<TiposPaquetesController>(TiposPaquetesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
