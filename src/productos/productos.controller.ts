import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { InventarioService } from 'src/inventario/inventario.service';

@Controller('productos')
export class ProductosController {


  constructor(
    private readonly productosService: ProductosService,
    private readonly inventarioService: InventarioService
  ) { }

  @Post()
  create(@Body() createProductoDto: CreateProductoDto) {
    return this.productosService.create(createProductoDto);
  }

  @Get()
  findAll() {
    return this.productosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductoDto: UpdateProductoDto) {
    return this.productosService.update(+id, updateProductoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productosService.remove(+id);
  }


  @Get('estatusProducto/:idProducto')
  estatusProducto(@Param('idProducto') idProducto: string) { // VALIDAMOS QUE SI EXISTA ESTOCK EN EL INVENTARIO
    var data: any = this.inventarioService.findOneByProducto(+idProducto);
    return data.stock > 0;
  }
}
