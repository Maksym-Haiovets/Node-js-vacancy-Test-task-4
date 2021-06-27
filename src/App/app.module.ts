import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { dbModule } from '../db/db.module'
import { HOST, PORT, USERNAME, PASSWORD, DATABASE_NAME} from '../const'

//entities
import { AllCashires } from '../db/Entities/AllCashiersEntity'
import { CurrentCashires } from '../db/Entities/CurrentCashiresEntity'

@Module({
  imports: [
    dbModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: HOST,
      port: PORT,
      username: USERNAME,
      password: PASSWORD,
      database: DATABASE_NAME,
      entities: [AllCashires, CurrentCashires],
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
