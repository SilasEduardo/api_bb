import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Acesso extends Document {
  @Prop({ required: true })
  profile: string;

  @Prop({ required: true })
  accessType: string;

  @Prop({ required: true })
  key: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true, unique: true }) // Índice único adicionado
  numberUser: string;

  @Prop() // Não é obrigatório
  passWordAcout?: string;

  @Prop({ default: false }) // Propriedade para status de aprovação
  approvedChaveJ?: boolean;

  @Prop({ default: false }) // Propriedade para status de aprovação
  approvedPassword?: boolean;

  @Prop({ default: false }) // Propriedade para status de aprovação
  approvedAlfa?: boolean;
}

export const AcessoSchema = SchemaFactory.createForClass(Acesso);
