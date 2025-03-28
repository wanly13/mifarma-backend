export class CreateDetalleFacturaDto {
  id: number;
  facturaId: number; // Relación con la factura
  producto: string;
  cantidad: number;
  precioUnitario: number;
  subtotal: number;
}
