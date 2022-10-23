import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateInterpreteDto {
  @IsNotEmpty({ message: 'El campo nombre no deber ser vacío' })
  @IsString({ message: 'El campo nombre debe ser de tipo cadena' })
  @MaxLength(100, { message: 'El campo nombre excede los 100 caracteres' })
  readonly nombre: string;

  @IsNotEmpty({ message: 'El campo nacionalidad no deber ser vacío' })
  @IsString({ message: 'El campo nacionalidad debe ser de tipo cadena' })
  @MaxLength(50, { message: 'El campo nacionaldiad excede los 50 caracteres' })
  readonly nacionalidad: string;
}
