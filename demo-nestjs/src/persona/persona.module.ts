import { Module } from '@nestjs/common';
import { PersonaService } from './persona.service';
import { PersonaController } from './persona.controller';

@Module({
  controllers: [PersonaController],
  providers: [PersonaService]
})
export class PersonaModule {}
