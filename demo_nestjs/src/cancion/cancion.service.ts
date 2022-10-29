import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCancionDto } from './dto/create-cancion.dto';
import { UpdateCancionDto } from './dto/update-cancion.dto';
import { CancionEntity } from './entities/cancion.entity';

@Injectable()
export class CancionService {
  constructor(
    @InjectRepository(CancionEntity)
    private repository: Repository<CancionEntity>,
  ) {}

  async create(createCancionDto: CreateCancionDto): Promise<CancionEntity> {
    const cancionExistente = await this.repository.findOneBy({
      idAlbum: createCancionDto.idAlbum,
      idGenero: createCancionDto.idGenero,
      nombre: createCancionDto.nombre.trim(),
    });
    if (cancionExistente) throw new ConflictException(`El cancion ya existe`);

    return this.repository.save({
      idAlbum: createCancionDto.idAlbum,
      idGenero: createCancionDto.idGenero,
      nombre: createCancionDto.nombre.trim(),
      duracion: createCancionDto.duracion.trim(),
      tags: createCancionDto.tags.trim(),
      url: createCancionDto.url.trim(),
    });
  }

  async findAll(): Promise<CancionEntity[]> {
    return this.repository.find({ relations: { album: true, genero: true } });
  }

  async findOne(id: number): Promise<CancionEntity> {
    const cancion = await this.repository.findOne({
      where: { id },
      relations: { album: true, genero: true },
    });
    if (!cancion) throw new NotFoundException(`El cancion ${id} no existe`);
    return cancion;
  }

  async update(
    id: number,
    updateCancionDto: UpdateCancionDto,
  ): Promise<CancionEntity> {
    const cancion = await this.repository.findOneBy({ id });
    if (!cancion) throw new NotFoundException(`El cancion ${id} no existe`);

    const updateCancion = Object.assign(cancion, updateCancionDto);
    return this.repository.save(updateCancion);
  }

  async remove(id: number): Promise<void> {
    const cancion = await this.repository.findOneBy({ id });
    if (!cancion) throw new NotFoundException(`El cancion ${id} no existe`);
    await this.repository.delete(id);
  }
}
