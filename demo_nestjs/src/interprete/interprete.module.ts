import { Module } from '@nestjs/common';
import { InterpreteService } from './interprete.service';
import { InterpreteController } from './interprete.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InterpreteEntity } from './entities/interprete.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InterpreteEntity])],
  controllers: [InterpreteController],
  providers: [InterpreteService]
})
export class InterpreteModule {}
