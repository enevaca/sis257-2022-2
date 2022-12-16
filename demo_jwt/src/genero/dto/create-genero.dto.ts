import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateGeneroDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo descripcion es obligatorio' })
  @IsString({ message: 'El campo descripcion debe ser tipo cadena' })
  @MaxLength(50, { message: 'El campo descripcion excede los 50 caractares' })
  readonly descripcion: string;
}
