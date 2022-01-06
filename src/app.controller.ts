import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('prefixo')
export class AppController {
  // injeção de dependência
  constructor(private readonly appService: AppService) {}

  @Get('teste')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('iha')
  iha(): string {
    return this.appService.iha();
  }
}
