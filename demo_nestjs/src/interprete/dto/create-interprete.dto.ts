import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateInterpreteDto {
  @IsNotEmpty({ message: 'El campo nombre es obligatorio' })
  @IsString({ message: 'El campo nombre debe ser tipo cadena' })
  @MaxLength(100, { message: 'El campo nombre excede los 100 caractares' })
  readonly nombre: string;

  @IsNotEmpty({ message: 'El campo nacionalidad es obligatorio' })
  @IsString({ message: 'El campo nacionalidad debe ser tipo cadena' })
  @MaxLength(50, { message: 'El campo nacionalidad excede los 50 caractares' })
  readonly nacionalidad: string;
}
