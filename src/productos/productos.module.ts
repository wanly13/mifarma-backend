import { Module } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { InventarioService } from 'src/inventario/inventario.service';

@Module({
  controllers: [ProductosController],
  providers: [ProductosService, InventarioService],
})
export class ProductosModule {}
