import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { AlbumEntity } from './entities/album.entity';

@Injectable()
export class AlbumService {
  constructor(
    @InjectRepository(AlbumEntity)
    private repository: Repository<AlbumEntity>,
  ) {}

  async create(createAlbumDto: CreateAlbumDto): Promise<AlbumEntity> {
    const albumExistente = await this.repository.findOneBy({
      idInterprete: createAlbumDto.idInterprete,
      nombre: createAlbumDto.nombre.trim(),
    });
    if (albumExistente) throw new ConflictException(`El album ya existe`);

    return this.repository.save({
      idInterprete: createAlbumDto.idInterprete,
      nombre: createAlbumDto.nombre.trim(),
      fechaLanzamiento: createAlbumDto.fechaLanzamiento,
    });
  }

  async findAll(): Promise<AlbumEntity[]> {
    return this.repository.find({ relations: { interprete: true } });
  }

  async findOne(id: number): Promise<AlbumEntity> {
    const album = await this.repository.findOne({
      where: { id },
      relations: { interprete: true },
    });
    if (!album) throw new NotFoundException(`El album ${id} no existe`);
    return album;
  }

  async update(
    id: number,
    updateAlbumDto: UpdateAlbumDto,
  ): Promise<AlbumEntity> {
    const album = await this.repository.findOneBy({ id });
    if (!album) throw new NotFoundException(`El album ${id} no existe`);

    const updateAlbum = Object.assign(album, updateAlbumDto);
    return this.repository.save(updateAlbum);
  }

  async remove(id: number): Promise<void> {
    const album = await this.repository.findOneBy({ id });
    if (!album) throw new NotFoundException(`El album ${id} no existe`);
    await this.repository.delete(id);
  }
}
