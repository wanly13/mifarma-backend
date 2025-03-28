import { Injectable } from '@nestjs/common';
import { CreateVentaDto } from './dto_venta/create-venta.dto';
import { UpdateVentaDto } from './dto_venta/update-venta.dto';
import { BD_FACTURAS } from 'src/BASE_DE_DATOS/db_ventas';

@Injectable()
export class VentasService {
  private facturas: CreateVentaDto[] = BD_FACTURAS;

  create(createVentaDto: CreateVentaDto) {
    const nuevaFactura = { id: this.facturas.length + 1, ...createVentaDto };
    this.facturas.push(nuevaFactura);
    return { message: "Factura creada exitosamente", factura: nuevaFactura };
  }

  findAll() {
    return this.facturas;
  }

  findOne(id: number) {
    const factura = this.facturas.find(factura => factura.id === id);
    return factura || { message: "Factura no encontrada" };
  }

  update(id: number, updateFacturaDto: UpdateVentaDto) {
    const index = this.facturas.findIndex(factura => factura.id === id);
    if (index === -1) return { message: "Factura no encontrada" };

    this.facturas[index] = { ...this.facturas[index], ...updateFacturaDto };
    return { message: "Factura actualizada", factura: this.facturas[index] };
  }

  remove(id: number) {
    const index = this.facturas.findIndex(factura => factura.id === id);
    if (index === -1) return { message: "Factura no encontrada" };

    const eliminada = this.facturas.splice(index, 1);
    return { message: "Factura eliminada", factura: eliminada[0] };
  }
}
