import { Injectable } from '@nestjs/common';
import { CreateOperacaoDto } from './dto/create-operacao.dto';
import { UpdateOperacaoDto } from './dto/update-operacao.dto';

@Injectable()
export class OperacaoService {
  const nome = "teste"
  
  create(createOperacaoDto: CreateOperacaoDto) {
    return 'This action adds a new operacao';
  }

  findAll() {
    return `This action returns all operacao`;
  }

  findOne(id: number) {
    return `This action returns a #${id} operacao`;
  }

  update(id: number, updateOperacaoDto: UpdateOperacaoDto) {
    return `This action updates a #${id} operacao`;
  }

  remove(id: number) {
    return `This action removes a #${id} operacao`;
  }
}
