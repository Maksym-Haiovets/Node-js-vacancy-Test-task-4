import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { dbService } from './db.service'

@Module({
  controllers: [AppController],
  providers: [dbService]
})
export class AppModule {}
