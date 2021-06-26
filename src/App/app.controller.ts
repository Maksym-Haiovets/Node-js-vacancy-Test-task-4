import { Controller, Get } from '@nestjs/common';
import { dbService } from '../db/db.service'

@Controller()
export class AppController {
  constructor(private readonly DBService: dbService) {}

  // getAllCashiers
  // getTargetCashiers1
  // getTargetCashiers2
  
  @Get()
  getHello(): string {
    return this.DBService.getHello();
  }
}
