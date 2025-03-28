import { Injectable } from '@nestjs/common';
import { CreateInventarioDto } from './dto/create-inventario.dto';
import { UpdateInventarioDto } from './dto/update-inventario.dto';
import { BD_INVENTARIOS } from 'src/BASE_DE_DATOS/db_inventario';

@Injectable()
export class InventarioService {
  private inventario: any[] = BD_INVENTARIOS;
  create(createInventarioDto: CreateInventarioDto) {
    return 'This action adds a new inventario';
  }

  findAll() {
    return this.inventario;
  }

  findOne(id: number) {
    return this.inventario.find(producto => producto.id === id);
  }

  findOneByProducto(idProducto: number) {
    return this.inventario.find(item => item.idProducto === idProducto);
  }

  update(id: number, updateInventarioDto: UpdateInventarioDto) {
    const index = this.inventario.findIndex(producto => producto.id === id);
    if (index === -1) return { message: "Producto no encontrado" };

    this.inventario[index] = { ...this.inventario[index], ...updateInventarioDto };
    return { message: "Producto actualizado", producto: this.inventario[index] };
  }

  remove(id: number) {
    const index = this.inventario.findIndex(producto => producto.id === id);
    if (index === -1) return { message: "Producto no encontrado" };

    const eliminado = this.inventario.splice(index, 1);
    return { message: "Producto eliminado", producto: eliminado[0] };
  }

}
