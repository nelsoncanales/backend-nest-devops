import { Test, TestingModule } from '@nestjs/testing';
import { OperacionesController } from './operaciones.controller';
import { OperacionesService } from './operaciones.service';
import e from 'express';


describe('OperacionesController', () => {
  let operacionesController: OperacionesController;


    beforeEach(async () => {
  
      const app: TestingModule = await Test.createTestingModule({
        controllers: [OperacionesController],
        providers: [OperacionesService],
      }).compile();
  
      operacionesController = app.get<OperacionesController>(OperacionesController);
    });

  describe('Probar el modulo raiz del proyecto', () => {
    test('Esto deberia retornar calculo"', () => {
    const resMock: any = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

      expect(operacionesController.operar(resMock,"suma",1,1)).toBe(undefined);
    });
  });

  describe('Probar el modulo raiz del proyecto', () => {
    test('Esto deberia retornar calculo"', () => {
    const resMock: any = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

      expect(operacionesController.operar(resMock,"suma",0,1)).toBe(undefined);
    });
  });

});
