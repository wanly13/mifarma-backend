import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InventarioService } from './inventario.service';
import { CreateInventarioDto } from './dto/create-inventario.dto';
import { UpdateInventarioDto } from './dto/update-inventario.dto';

@Controller('inventario')
export class InventarioController {
  constructor(private readonly inventarioService: InventarioService) {}

  // AGREGAR UN NUEVO STCOK DE UN PRODCUTO
  @Post()
  create(@Body() createInventarioDto: CreateInventarioDto) {
    return this.inventarioService.create(createInventarioDto);
  }

  
  @Get()
  findAll() {
    return this.inventarioService.findAll();
  }

  // ATRAVES DE ESTE EP SE ENVIA EL PRODUCTO PARA QUE SE CONSUMA DESDE (PRODCUTOS Y ORDENES) Y VERIFIQUE EL STOACK EN EL INVENTARIO
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inventarioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInventarioDto: UpdateInventarioDto) {
    return this.inventarioService.update(+id, updateInventarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inventarioService.remove(+id);
  }



}
