import { PartialType } from '@nestjs/swagger';
import { CreateInterpreteDto } from './create-interprete.dto';

export class UpdateInterpreteDto extends PartialType(CreateInterpreteDto) {}
