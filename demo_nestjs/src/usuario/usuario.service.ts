import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { UsuarioEntity } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(UsuarioEntity)
    private repository: Repository<UsuarioEntity>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<UsuarioEntity> {
    const usuarioExistente = await this.repository.findOneBy({
      usuario: createUsuarioDto.usuario.trim(),
    });
    if (usuarioExistente) throw new ConflictException(`El usuario ya existe`);

    return this.repository.save({
      usuario: createUsuarioDto.usuario.trim(),
      clave: process.env.DEFAULT_PASSWORD, // falta cifrar
      email: createUsuarioDto.email.trim(),
      rol: createUsuarioDto.rol.trim(),
      premium: createUsuarioDto.premium,
    });
  }

  async findAll(): Promise<UsuarioEntity[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<UsuarioEntity> {
    const usuario = await this.repository.findOneBy({ id });
    if (!usuario) throw new NotFoundException(`El usuario ${id} no existe`);
    return usuario;
  }

  async update(
    id: number,
    updateUsuarioDto: UpdateUsuarioDto,
  ): Promise<UsuarioEntity> {
    const usuario = await this.repository.findOneBy({ id });
    if (!usuario) throw new NotFoundException(`El usuario ${id} no existe`);

    const updateUsuario = Object.assign(usuario, updateUsuarioDto);
    return this.repository.save(updateUsuario);
  }

  async remove(id: number): Promise<void> {
    const usuario = await this.repository.findOneBy({ id });
    if (!usuario) throw new NotFoundException(`El usuario ${id} no existe`);
    await this.repository.delete(id);
  }
}
