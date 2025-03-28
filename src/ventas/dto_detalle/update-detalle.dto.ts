import { PartialType } from '@nestjs/mapped-types';
import { CreateDetalleFacturaDto } from './create-detalle.dto';

export class UpdateVentaDto extends PartialType(CreateDetalleFacturaDto) {}
