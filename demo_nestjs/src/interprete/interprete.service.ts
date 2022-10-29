import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInterpreteDto } from './dto/create-interprete.dto';
import { UpdateInterpreteDto } from './dto/update-interprete.dto';
import { InterpreteEntity } from './entities/interprete.entity';

@Injectable()
export class InterpreteService {
  constructor(
    @InjectRepository(InterpreteEntity)
    private repository: Repository<InterpreteEntity>,
  ) {}

  async create(
    createInterpreteDto: CreateInterpreteDto,
  ): Promise<InterpreteEntity> {
    const interpreteExistente = await this.repository.findOneBy({
      nombre: createInterpreteDto.nombre.trim(),
      nacionalidad: createInterpreteDto.nacionalidad.trim(),
    });
    if (interpreteExistente)
      throw new ConflictException(`El interprete ya existe`);

    return this.repository.save({
      nombre: createInterpreteDto.nombre.trim(),
      nacionalidad: createInterpreteDto.nacionalidad.trim(),
    });
  }

  async findAll(): Promise<InterpreteEntity[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<InterpreteEntity> {
    const interprete = await this.repository.findOne({
      where: { id },
      relations: { albums: true },
    });
    if (!interprete)
      throw new NotFoundException(`El interprete ${id} no existe`);
    return interprete;
  }

  async update(
    id: number,
    updateInterpreteDto: UpdateInterpreteDto,
  ): Promise<InterpreteEntity> {
    const interprete = await this.repository.findOneBy({ id });
    if (!interprete)
      throw new NotFoundException(`El interprete ${id} no existe`);

    const updateInterprete = Object.assign(interprete, updateInterpreteDto);
    return this.repository.save(updateInterprete);
  }

  async remove(id: number): Promise<void> {
    const interprete = await this.repository.findOneBy({ id });
    if (!interprete)
      throw new NotFoundException(`El interprete ${id} no existe`);
    await this.repository.delete(id);
  }
}
