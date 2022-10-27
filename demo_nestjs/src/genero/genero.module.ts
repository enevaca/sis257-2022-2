import { Module } from '@nestjs/common';
import { GeneroService } from './genero.service';
import { GeneroController } from './genero.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GeneroEntity } from './entities/genero.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GeneroEntity])],
  controllers: [GeneroController],
  providers: [GeneroService]
})
export class GeneroModule {}
