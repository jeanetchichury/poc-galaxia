import { Module } from '@nestjs/common';
import { OperacaoService } from './operacao.service';
import { OperacaoController } from './operacao.controller';

@Module({
  controllers: [OperacaoController],
  providers: [OperacaoService]
})
export class OperacaoModule {}
