import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { dbService } from './db.service';
import { AllCashires } from './Entities/AllCashiersEntity';
import { CurrentCashires } from './Entities/CurrentCashiresEntity'

@Module({
  imports: [
    TypeOrmModule.forFeature([AllCashires, CurrentCashires])
  ],
  controllers: [],
  providers: [dbService],
  exports: [dbService]
})
export class dbModule {}