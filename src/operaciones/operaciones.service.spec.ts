import { Test, TestingModule } from '@nestjs/testing';
import { OperacionesService } from './operaciones.service';

describe('OperacionesService', () => {
  let service: OperacionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OperacionesService],
    }).compile();

    service = module.get<OperacionesService>(OperacionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('operacion deberia sumar', () => {
    let a: any = 10;
    let b = 30;

    expect(service.operar('suma', a, b)).toBe(40);

    a = -10;
    b = 50;
    expect(service.operar('suma', a, b)).toBe(40);

    a = -10;
    b = -50;
    expect(service.operar('suma', a, b)).not.toBe(-100);

    a = Math.PI;
    b = 30;
    expect(service.operar('suma', a, b)).toBeCloseTo(33.14, 2);

    a = null;
    b = 50;
    expect(service.operar('suma', a, b)).toBeNaN();

    a = '10';
    b = 50;
    expect(service.operar('suma', a, b)).toBeNaN();

    a = undefined;
    b = 50;
    expect(() => {
      service.operar('suma', a, b);
    }).toThrow('No se puede llamar con numeros indefinidos.');
  });


  it('operacion deberia Resta', () => {
    let a: any = 10;
    let b = 30;

    expect(service.operar('resta', a, b)).toBe(-20);

    a = -10;
    b = 50;
    expect(service.operar('resta', a, b)).toBe(-60);

    a = -10;
    b = -50;
    expect(service.operar('resta', a, b)).not.toBe(-100);

    a = Math.PI;
    b = 30;
    expect(service.operar('resta', a, b)).toBeCloseTo(-26.86, 2);

    a = null;
    b = 50;
    expect(service.operar('resta', a, b)).toBeNaN();

    a = '10';
    b = 50;
    expect(service.operar('resta', a, b)).toBeNaN();

    a = undefined;
    b = 50;
    expect(() => {
      service.operar('resta', a, b);
    }).toThrow('No se puede llamar con numeros indefinidos.');
  });

  
  it('operacion deberia Multiplicar', () => {
    let a: any = 10;
    let b = 30;

    expect(service.operar('multiplicacion', a, b)).toBe(300);

    a = -10;
    b = 50;
    expect(service.operar('multiplicacion', a, b)).toBe(-500);

    a = -10;
    b = -50;
    expect(service.operar('multiplicacion', a, b)).not.toBe(-500);

    a = 0;
    b = 30;
    expect(service.operar('multiplicacion', a, b)).toBeCloseTo(0, 2);

    a = null;
    b = 50;
    expect(service.operar('multiplicacion', a, b)).toBeNaN();

    a = '10';
    b = 50;
    expect(service.operar('multiplicacion', a, b)).toBeNaN();

    a = undefined;
    b = 50;
    expect(() => {
      service.operar('multiplicacion', a, b);
    }).toThrow('No se puede llamar con numeros indefinidos.');
  });

  
  it('operacion deberia dividir', () => {
    let a: any = 30;
    let b = 10;

    expect(service.operar('division', a, b)).toBe(3);

    a = 50;
    b = 10;
    expect(service.operar('division', a, b)).toBe(5);

    a = -50;
    b = -10;
    expect(service.operar('division', a, b)).not.toBe(75);

    b = Math.PI;
    a = 30;
    expect(service.operar('division', a, b)).toBeCloseTo(9.55, 2);

    a = null;
    b = 50;
    expect(service.operar('division', a, b)).toBeNaN();

    a = '10';
    b = 50;
    expect(service.operar('division', a, b)).toBeNaN();

    a = undefined;
    b = 50;
    expect(() => {
      service.operar('division', a, b);
    }).toThrow('No se puede llamar con numeros indefinidos.');
  });

  
  it('operacion deberia elevar', () => {
    let a: any = 1;
    let b = 3;

    expect(service.operar('potencia', a, b)).toBe(1);

    a = 5;
    b = 2;
    expect(service.operar('potencia', a, b)).toBe(25);

    a = 2;
    b = 2;
    expect(service.operar('potencia', a, b)).not.toBe(-100);


    a = null;
    b = 50;
    expect(service.operar('potencia', a, b)).toBeNaN();

    a = '10';
    b = 50;
    expect(service.operar('potencia', a, b)).toBeNaN();

    a = undefined;
    b = 50;
    expect(() => {
      service.operar('potencia', a, b);
    }).toThrow('No se puede llamar con numeros indefinidos.');
  });

  
  it('operacion deberia hacer factorial', () => {
    let a: any = 1;
    let b = 3;

    expect(service.operar('factorial', a, b)).toBe(1);

    
    a = 4;
    b = 50;
    expect(service.operar('factorial', a, b)).toBe(24);


    a = 1;
    b = 50;
    expect(service.operar('factorial', a, b)).toBe(1);

    a = null;
    b = 50;
    expect(service.operar('factorial', a, b)).toBeNaN();

    a = '10';
    b = 50;
    expect(service.operar('factorial', a, b)).toBeNaN();

    a = undefined;
    b = 50;
    expect(() => {
      service.operar('factorial', a, b);
    }).toThrow('No se puede llamar con numeros indefinidos.');
  });


});
