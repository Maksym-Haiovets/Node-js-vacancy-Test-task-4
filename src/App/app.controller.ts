import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { dbService } from './db.service'

@Controller('cashires')
export class AppController {
  constructor(private readonly DBService: dbService) {}

  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  createCashire(@Body() cashire: ICashier){
    return this.DBService.CreateCashire(cashire);
  }

  @Delete('delete/:id')
  @HttpCode(HttpStatus.OK)
  removeChasire(@Param('id') id: number){
    this.DBService.DeleteCashire(id);
  }

  @Put('update/:id')
  @HttpCode(HttpStatus.OK)
  UpdateCashire(@Param('id') id: number, @Body() body){
    const table = body.table;
    const cashire: ICashier = body.cashire;
    return this.DBService.UpdateCashire(id, table, cashire)
  }

  @Get('get/:table_name/:id')
  @HttpCode(HttpStatus.OK)
  GetCashire(@Param('id') id: number, @Param('table_name') table: string){
    return this.DBService.GetCashire(id, table);
  }
  ////
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

  @Get('get-all-cashires')
  @HttpCode(HttpStatus.OK)
  getAllCashiers(){
    return this.DBService.getAllCashiers()
  }
}
