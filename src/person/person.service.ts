import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Person, PersonDocument } from './schemas/person.schema';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';

@Injectable()
export class PersonService {
  
  constructor(@InjectModel(Person.name) private personModel: Model<PersonDocument>) {}

  async create(createPersonDto: CreatePersonDto) {
    const createdPerson = new this.personModel(createPersonDto)
    return await createdPerson.save();
  }

  async findAll() {
    return await this.personModel.find().exec();
  }

  async findOne(id: string) {
    return await this.personModel.findOne({id}); 
  }

  async update(id: string, updatePersonDto: UpdatePersonDto) {
    await this.personModel.updateOne({id}, updatePersonDto)
    return await this.findOne(id)
  }

  async remove(id: string) {
    return await this.personModel.deleteOne({id});
  }
}
