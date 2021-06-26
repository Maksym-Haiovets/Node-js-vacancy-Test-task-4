import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { dbService } from './db.service';
import { AllCashires, AllCashiresSchema} from './Schemes/AllCashiersSchema'
import { CurrentCashires, CurrentCashiresSchema} from './Schemes/CurrentCashiersSchema'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: CurrentCashires.name, schema: CurrentCashiresSchema }]),
    MongooseModule.forFeature([{ name: AllCashires.name, schema: AllCashiresSchema }])
  ],
  controllers: [],
  providers: [dbService],
  exports: [dbService]
})
export class dbModule {}