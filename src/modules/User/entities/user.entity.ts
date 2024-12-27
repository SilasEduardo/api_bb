import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  profile: string;

  @Prop({ required: true })
  accessType: string;

  @Prop({ required: true })
  key: string;

  @Prop({ default: false })
  saveData: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
