import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';
import { Person, PersonSchema } from './schemas/person.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Person.name, schema: PersonSchema }])],
  controllers: [PersonController],
  providers: [PersonService]
})
export class PersonModule {}
