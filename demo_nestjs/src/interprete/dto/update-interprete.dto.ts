import { PartialType } from '@nestjs/mapped-types';
import { CreateInterpreteDto } from './create-interprete.dto';

export class UpdateInterpreteDto extends PartialType(CreateInterpreteDto) {}
