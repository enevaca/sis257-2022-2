import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDefined,
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateUsuarioDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo usuario es obligatorio' })
  @IsString({ message: 'El campo usuario debe ser tipo cadena' })
  @MaxLength(20, { message: 'El campo usuario excede los 20 caractares' })
  readonly usuario: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo email es obligatorio' })
  @IsString({ message: 'El campo email debe ser tipo cadena' })
  @MaxLength(50, { message: 'El campo email excede los 50 caractares' })
  readonly email: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo rol es obligatorio' })
  @IsString({ message: 'El campo rol debe ser tipo cadena' })
  @MaxLength(15, { message: 'El campo rol excede los 15 caractares' })
  readonly rol: string;

  @ApiProperty()
  @IsDefined({ message: 'El campo premium es obligatorio' })
  @IsBoolean({ message: 'El campo rol debe ser un valor lógico' })
  readonly premium: boolean;
}
