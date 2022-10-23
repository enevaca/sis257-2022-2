import { Injectable, NotFoundException } from '@nestjs/common';
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
    return this.repository.save({
      nombre: createInterpreteDto.nombre.trim(),
      nacionalidad: createInterpreteDto.nacionalidad.trim(),
    });
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  update(id: number, updateInterpreteDto: UpdateInterpreteDto) {
    return `This action updates a #${id} interprete`;
  }

  async remove(id: number): Promise<any> {
    const interprete = await this.repository.findOneBy({ id });
    if(!interprete) throw new NotFoundException();
    return this.repository.delete(interprete);
  }
}
 