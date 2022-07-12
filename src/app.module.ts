import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
// import { PersonService } from './person/person.service';
import { PersonModule } from './person/person.module';
import { OperacaoModule } from './operacao/operacao.module';
require('dotenv').config()

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_CONNECTION_STRING), PersonModule, OperacaoModule],
  controllers: [AppController],
  providers: [
    AppService,
  ],
})
export class AppModule {}
