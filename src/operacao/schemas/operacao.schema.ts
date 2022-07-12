import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { OperacaoService } from "../operacao.service"
export type OperacaoDocument = Operacao & Document;
 
const nomeOp = OperacaoService.nome
@Schema()
export class Operacao {
  @Prop()
  [nomeOp]: string;

  @Prop()
  permissionario: string;

  @Prop()
  email: string;
}

export const OperacaoSchema = SchemaFactory.createForClass(Operacao);