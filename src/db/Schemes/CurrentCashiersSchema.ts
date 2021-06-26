import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CurrentCashiresDocument = CurrentCashires & Document;
@Schema()
export class CurrentCashires {

  @Prop()
  Fname: String;

  @Prop()
  Lname: String;

  @Prop()
  Age: Number;

  @Prop()
  sex: Sex;

  @Prop()
  yearsOfExperience: String;

  @Prop()
  Previous_job: String;

  @Prop()
  worksInShifts: String;

  @Prop()
  ShopAddress: String

  @Prop()
  NumberOFCashRegister: NumberOFCashRegister;

  @Prop()
  city: String;
}
export const CurrentCashiresSchema = SchemaFactory.createForClass(CurrentCashires);