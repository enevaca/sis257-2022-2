import { Module } from '@nestjs/common';
import { CancionService } from './cancion.service';
import { CancionController } from './cancion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CancionEntity } from './entities/cancion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CancionEntity])],
  controllers: [CancionController],
  providers: [CancionService],
})
export class CancionModule {}
