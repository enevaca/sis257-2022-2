import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
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

    const usuario = new UsuarioEntity();
    usuario.usuario = createUsuarioDto.usuario.trim();
    usuario.clave = process.env.DEFAULT_PASSWORD;
    usuario.email = createUsuarioDto.email.trim();
    usuario.rol = createUsuarioDto.rol.trim();
    usuario.premium = createUsuarioDto.premium;

    const nuevoUsuario = await this.repository.save(usuario);
    delete nuevoUsuario.clave;
    return nuevoUsuario;
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

  async updatePassword(id: number, nuevaClave: string): Promise<UsuarioEntity> {
    const usuario = await this.repository.findOneBy({ id });
    if (!usuario) throw new NotFoundException(`El usuario ${id} no existe`);

    const usuarioUpdate = new UsuarioEntity();
    Object.assign(usuarioUpdate, usuario);
    usuarioUpdate.clave = nuevaClave;
    return this.repository.save(usuarioUpdate);
  }

  async remove(id: number): Promise<void> {
    const usuario = await this.repository.findOneBy({ id });
    if (!usuario) throw new NotFoundException(`El usuario ${id} no existe`);
    await this.repository.delete(id);
  }

  async validate(usuario: string, clave: string): Promise<UsuarioEntity> {
    const usuarioOk = await this.repository.findOne({
      where: { usuario },
      select: ['id', 'usuario', 'clave', 'email', 'rol', 'premium'],
    });

    if (!usuarioOk) throw new NotFoundException('Usuario inexistente');

    if (!(await usuarioOk?.validatePassword(clave))) {
      throw new UnauthorizedException('Clave incorrecta');
    }

    delete usuarioOk.clave;
    return usuarioOk;
  }
}
