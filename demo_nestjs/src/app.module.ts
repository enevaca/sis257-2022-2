import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonaModule } from './persona/persona.module';

@Module({
  imports: [PersonaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
