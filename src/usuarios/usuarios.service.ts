import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { BD_USUARIOS } from 'src/BASE_DE_DATOS/db_usuarios';

@Injectable()
export class UsuariosService {
  private usuarios: CreateUsuarioDto[] = BD_USUARIOS;

  create(createUsuarioDto: CreateUsuarioDto) {
    const nuevoUsuario = { id: this.usuarios.length + 1, ...createUsuarioDto };
    this.usuarios.push(nuevoUsuario);
    return { message: "Usuario agregado correctamente", usuario: nuevoUsuario };
  }

  findAll() {
    return this.usuarios;
  }

  findOne(id: number) {
    const usuario = this.usuarios.find(usuario => usuario.id === id);
    return usuario || { message: "Usuario no encontrado" };
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    const index = this.usuarios.findIndex(usuario => usuario.id === id);
    if (index === -1) return { message: "Usuario no encontrado" };

    this.usuarios[index] = { ...this.usuarios[index], ...updateUsuarioDto };
    return { message: "Usuario actualizado", usuario: this.usuarios[index] };
  }

  remove(id: number) {
    const index = this.usuarios.findIndex(usuario => usuario.id === id);
    if (index === -1) return { message: "Usuario no encontrado" };

    const eliminado = this.usuarios.splice(index, 1);
    return { message: "Usuario eliminado", usuario: eliminado[0] };
  }

  login(nombre: string, apellido: string) {
    const usuario = this.usuarios.find(
      usuario => usuario.nombre === nombre && usuario.apellido === apellido
    );

    if (!usuario) {
      return { message: "Credenciales incorrectas" };
    }

    return { message: "Login exitoso", usuario };
  }
}
