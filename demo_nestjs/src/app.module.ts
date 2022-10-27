import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { InterpreteModule } from './interprete/interprete.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'usrmusic',
      password: '123456',
      database: 'music',
      entities: ['**/entities/*.js'],
      synchronize: true,
    }),
    InterpreteModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
