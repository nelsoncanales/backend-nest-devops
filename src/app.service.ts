import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHelloAleman(): string {
    return 'Hallo Welt';
  }

<<<<<<< HEAD
  getHelloFrances(
=======
  getHelloFrances(): string {
    return 'mi mensaje de pruebas';
  }
>>>>>>> parent of f213943 (resolucion de conflictos para cambio en endpoint en frances)
}
