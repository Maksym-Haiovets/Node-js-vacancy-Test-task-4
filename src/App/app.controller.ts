import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { dbService } from './db.service'

@Controller('cashires')
export class AppController {
  constructor(private readonly DBService: dbService) {}

  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  createCashire(@Body() cashire: ICashier){
    return this.DBService.CreateCashire(cashire);
  }

  @Get('get-target-one')
  @HttpCode(HttpStatus.OK)
  getTargetCashiers1(){
    return this.DBService.getTargetCashiers1()
  }

  @Get('get-target-two')
  @HttpCode(HttpStatus.OK)
  getTargetCashiers2(){
    return this.DBService.getTargetCashiers2()
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  getAllCashiers(){
    return this.DBService.getAllCashiers()
  }
}
