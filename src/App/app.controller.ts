import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { dbService } from './db.service'

@Controller('cashires')
export class AppController {
  constructor(private readonly DBService: dbService) {}

  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  createCashire(@Body() cashire: ICashier): Promise<ICashier>{
    return this.DBService.CreateCashire(cashire);
  }

  @Delete('delete/:id')
  @HttpCode(HttpStatus.OK)
  removeChasire(@Param('id') id: number): Promise<void> {
    return this.DBService.DeleteCashire(id);
  }

  @Put('update/:id')
  @HttpCode(HttpStatus.OK)
  UpdateCashire(@Param('id') id: number, @Body() body): Promise<ICashier>{
    const table = body.table;
    const cashire: ICashier = body.cashire;
    return this.DBService.UpdateCashire(id, table, cashire)
  }

  @Get('get/:table_name/:id')
  @HttpCode(HttpStatus.OK)
  GetCashireByID(@Param('id') id: number, @Param('table_name') table: string): Promise<ICashier>{
    return this.DBService.GetCashireByID(id, table);
  }
  
  @Get('get/:table_name/:age/:sex/:yearsOfExperience')
  @HttpCode(HttpStatus.OK)
  GetCashire(
    @Param('table_name') table: string, 
    @Param('age') age: number, 
    @Param('sex') gender: Gender,
    @Param('yearsOfExperience') yearsOfExperience: number,
    ): Promise<ICashier>{
    return this.DBService.GetCashire(table, age, gender, yearsOfExperience);
  }
  ////
  @Get('get-target-one')
  @HttpCode(HttpStatus.OK)
  getTargetCashiers1(): Promise<ICashier[]>{
    return this.DBService.getTargetCashiers1()
  }

  @Get('get-target-two')
  @HttpCode(HttpStatus.OK)
  getTargetCashiers2(): Promise<ICashier[]>{
    return this.DBService.getTargetCashiers2()
  }

  @Get('get-all-cashires')
  @HttpCode(HttpStatus.OK)
  getAllCashiers(): Promise<ICashier[]>{
    return this.DBService.getAllCashiers()
  }
}
