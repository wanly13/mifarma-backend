import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  BD_PRODUCTOS  = []
  BD_ORDENES  = []
  BD_AUTENTICACION  = []
  BD_PAGOS  = []
  BD_INVENTARIO  = []
  BD_LEALTAD  = []
  
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
