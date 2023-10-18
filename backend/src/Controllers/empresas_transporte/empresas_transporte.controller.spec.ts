import { Test, TestingModule } from '@nestjs/testing';
import { EmpresasTransporteController } from './empresas_transporte.controller';

describe('EmpresasTransporteController', () => {
  let controller: EmpresasTransporteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmpresasTransporteController],
    }).compile();

    controller = module.get<EmpresasTransporteController>(EmpresasTransporteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
