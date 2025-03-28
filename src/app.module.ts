import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosModule } from './productos/productos.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { InventarioModule } from './inventario/inventario.module';
import { VentasModule } from './ventas/ventas.module';
import { PagosModule } from './pagos/pagos.module';

@Module({
  imports: [ProductosModule, UsuariosModule, InventarioModule, VentasModule, PagosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
