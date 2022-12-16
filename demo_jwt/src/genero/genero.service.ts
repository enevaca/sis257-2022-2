import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';
import { GeneroEntity } from './entities/genero.entity';

@Injectable()
export class GeneroService {
  constructor(
    @InjectRepository(GeneroEntity)
    private repository: Repository<GeneroEntity>,
  ) {}

  async create(createGeneroDto: CreateGeneroDto): Promise<GeneroEntity> {
    const generoExistente = await this.repository.findOneBy({
      descripcion: createGeneroDto.descripcion.trim()
    });
    if(generoExistente) throw new ConflictException(`El genero ya existe`);

    return this.repository.save({ descripcion: createGeneroDto.descripcion.trim() });
  }

  async findAll(): Promise<GeneroEntity[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<GeneroEntity> {
    const genero = await this.repository.findOneBy({ id });
    if(!genero) throw new NotFoundException(`El genero ${id} no existe`);
    return genero;
  }

  async update(id: number, updateGeneroDto: UpdateGeneroDto): Promise<GeneroEntity> {
    const genero = await this.repository.findOneBy({ id });
    if(!genero) throw new NotFoundException(`El genero ${id} no existe`);

    const updateGenero = Object.assign(genero, updateGeneroDto);
    return this.repository.save(updateGenero);
  }

  async remove(id: number): Promise<void> {
    const genero = await this.repository.findOneBy({ id });
    if(!genero) throw new NotFoundException(`El genero ${id} no existe`);
    await this.repository.delete(id);
  }
}
