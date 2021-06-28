import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { dbService } from './db.service'
import { DBHelperService } from './db.helper'
@Module({
  controllers: [AppController],
  providers: [dbService, DBHelperService]
})
export class AppModule {}
