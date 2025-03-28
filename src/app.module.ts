import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosModule } from './productos/productos.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { VentasModule } from './ventas/ventas.module';

@Module({
  imports: [ProductosModule, UsuariosModule, VentasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
