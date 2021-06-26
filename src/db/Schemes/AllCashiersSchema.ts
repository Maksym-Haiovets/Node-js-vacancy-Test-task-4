import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AllCashiresDocument = AllCashires & Document;

@Schema()
export class AllCashires {
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

export const AllCashiresSchema = SchemaFactory.createForClass(AllCashires);