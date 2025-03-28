import { CreateDetalleFacturaDto } from './../dto_detalle/create-detalle.dto';

export class CreateVentaDto {
    id: number;
    fecha: Date;
    cliente: string;
    total: number;
    detalles: CreateDetalleFacturaDto[];
}  