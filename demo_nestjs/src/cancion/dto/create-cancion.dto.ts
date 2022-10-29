import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateCancionDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo idAlbum es obligatorio' })
  @IsNumber({}, { message: 'El campo idAlbum debe ser tipo numérico' })
  readonly idAlbum: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo idGenero es obligatorio' })
  @IsNumber({}, { message: 'El campo idGenero debe ser tipo numérico' })
  readonly idGenero: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo nombre es obligatorio' })
  @IsString({ message: 'El campo nombre debe ser tipo cadena' })
  @MaxLength(50, { message: 'El campo nombre excede los 50 caractares' })
  readonly nombre: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo duracion es obligatorio' })
  @IsString({ message: 'El campo duracion debe ser tipo cadena' })
  @MaxLength(8, { message: 'El campo duracion excede los 8 caractares' })
  @MinLength(8, { message: 'El campo duracion es menor a 8 caractares' })
  readonly duracion: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo tags es obligatorio' })
  @IsString({ message: 'El campo tags debe ser tipo cadena' })
  @MaxLength(70, { message: 'El campo tags excede los 70 caractares' })
  readonly tags: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo url es obligatorio' })
  @IsString({ message: 'El campo url debe ser tipo cadena' })
  @MaxLength(250, { message: 'El campo url excede los 250 caractares' })
  readonly url: string;
}
