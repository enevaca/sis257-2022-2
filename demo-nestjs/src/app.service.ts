import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hola Mundo!!!';
  }

  prueba(): any {
    return { saludo: 'Hola SIS257 desde App Service' };
  }
}
