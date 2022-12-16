import { PartialType } from '@nestjs/swagger';
import { CreateCancionDto } from './create-cancion.dto';

export class UpdateCancionDto extends PartialType(CreateCancionDto) {}
