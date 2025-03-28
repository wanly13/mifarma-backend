import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PagosService } from './pagos.service';
import { CreatePagoDto } from './dto/create-pago.dto';
import { UpdatePagoDto } from './dto/update-pago.dto';

@Controller('pagos')
export class PagosController {

  constructor(private readonly pagosService: PagosService) { }
  // LA OPCION DE REGISTRAR UN PAGO / CON ESTADO INICIAL EN PROCESO FALSE
  @Post()
  create(@Body() createPagoDto: CreatePagoDto) {
    return this.pagosService.create(createPagoDto);
  }

  // LA OPCION DE REGISTRAR UN PAGO / CON ESTADO INICIAL EN PROCESO FALSE
  @Post('PasarelaDePagos')
  createPasarelaPagos(@Body() createPagoDto: CreatePagoDto) {
    return "CONSUMO A UN EVENTO EXTERNO PARA LA PASARELA DE PAGOS";
  }

  // ENVIAR LA NOTIFICACION AL USUARIO A TRAVEZ DEL SERVICIO EXTERNO
  @Post('PasarelaDePagos')
  createSentNotififacion(@Body() createPagoDto: CreatePagoDto) {
    return "ENVIANDO CORREO ELECTRONICO";
  }


  @Get()
  findAll() {
    return this.pagosService.findAll();
  }

  // SE PUEDE USAR PARA RASTREAR EL ORDEN - 
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pagosService.findOne(+id);
  }

  // VALIDAR QUE EL PAGO A SIDO REALIZADO CORRECTAMNTE
  @Get('findOneStatusPago/:id')
  findOneStatusPago(@Param('id') id: string) {
    var data: any = this.pagosService.findOne(+id);
    return data.status;
  }


  // CAMBAIR EL ESTADO DEL PAGO A SUCCES
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePagoDto: UpdatePagoDto) {
    return this.pagosService.update(+id, updatePagoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pagosService.remove(+id);
  }
}
