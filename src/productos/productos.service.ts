import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { BD_PRODUCTOS } from 'src/BASE_DE_DATOS/db_productos';

@Injectable()
export class ProductosService {
  private productos: CreateProductoDto[] = BD_PRODUCTOS;

  create(createProductoDto: CreateProductoDto) {
    this.productos.push({ id: this.productos.length + 1, ...createProductoDto });
    return { message: "Producto agregado correctamente", createProductoDto };
  }

  findAll() {
    return this.productos;
  }

  findOne(id: number) {
    return this.productos.find(producto => producto.id === id);
  }

  update(id: number, updateProductoDto: UpdateProductoDto) {
    const index = this.productos.findIndex(producto => producto.id === id);
    if (index === -1) return { message: "Producto no encontrado" };

    this.productos[index] = { ...this.productos[index], ...updateProductoDto };
    return { message: "Producto actualizado", producto: this.productos[index] };
  }

  remove(id: number) {
    const index = this.productos.findIndex(producto => producto.id === id);
    if (index === -1) return { message: "Producto no encontrado" };

    const eliminado = this.productos.splice(index, 1);
    return { message: "Producto eliminado", producto: eliminado[0] };
  }
}
