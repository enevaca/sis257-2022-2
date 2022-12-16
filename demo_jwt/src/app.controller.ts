import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getStatus(): string {
    return 'API Rest ejecutandose correctamente';
  }
}
