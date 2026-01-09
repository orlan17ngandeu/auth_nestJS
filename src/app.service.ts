import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return "Salut tous le monde ici orlan ngandeu dans l'apprentissage de NestJS!";
  }
}
