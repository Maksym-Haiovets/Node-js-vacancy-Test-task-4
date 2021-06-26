import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { dbModule } from '../db/db.module'
import { URI } from '../const'

@Module({
  imports: [
    dbModule,
    MongooseModule.forRoot(URI)
  ],
  controllers: [AppController],
})
export class AppModule {}
