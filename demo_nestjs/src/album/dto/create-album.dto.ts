import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsDateString, IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateAlbumDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo idInterprete es obligatorio' })
  @IsNumber({}, { message: 'El campo idInterprete debe ser tipo numérico' })
  readonly idInterprete: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo nombre es obligatorio' })
  @IsString({ message: 'El campo nombre debe ser tipo cadena' })
  @MaxLength(120, { message: 'El campo nombre excede los 120 caractares' })
  readonly nombre: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo fechaLanzamiento es obligatorio' })
  @IsDateString({ message: 'El campo fechaLanzamiento debe ser tipo fecha' })
  readonly fechaLanzamiento: Date;
}
