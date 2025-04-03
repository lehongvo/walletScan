import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type WalletDocument = HydratedDocument<Wallet>;

@Schema()
export class Wallet {
  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  privateKey: string;

  @Prop({ required: true })
  mnemonic: string;

  @Prop({ type: Number, default: 0 })
  balance: number;

  @Prop({ required: true })
  rpc: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
  
}

export const WalletSchema = SchemaFactory.createForClass(Wallet); 