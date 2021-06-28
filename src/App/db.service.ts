import { Injectable } from '@nestjs/common';
import { DBHelperService } from './db.helper'
const db = require('../db/db')

@Injectable()
export class dbService {
    constructor(private readonly dbHelperService: DBHelperService){}

    async CreateCashire(cashire: ICashier){
        return this.dbHelperService.CreateCashire(cashire, 'currentcashires');
    }
      
    async DeleteCashire(id: number){
        return this.dbHelperService.DeleteCashire(id);
    }

    async UpdateCashire(id: number, table: string, cashire: ICashier){
        return this.dbHelperService.UpdateCashire(id, table, cashire);
    }

    async GetCashire(id: number, table: string){
        return this.dbHelperService.GetCashire(id, table)
    }

    ///////////
    async getTargetCashiers1(){
        const allCashires = await db.query(`
            SELECT * FROM formercashires 
                WHERE city = 'Lviv' 
                AND yearsofexperience >= 5 
                AND (previous_job = 'Arsen' OR previous_job = 'Silpo')
            UNION ALL
            SELECT * FROM currentcashires 
                WHERE city = 'Lviv' 
                AND yearsofexperience >= 5 
                AND (previous_job = 'Arsen' OR previous_job = 'Silpo')
        `)
        return allCashires.rows
    }

    async getTargetCashiers2(){
        const allCashires = await db.query(`
            SELECT * FROM currentcashires
                WHERE MOD(numberofcashregister,2) = 1
                AND shopaddress = 'Shevchenko 100'
                AND worksinshifts LIKE '%monday%'
                AND worksinshifts LIKE '%23:00 - 07:00%'
        `)
        return allCashires.rows
    }

    async getAllCashiers (){
        const allCashires = await db.query(`
            SELECT * FROM formercashires
            UNION ALL  
            SELECT * FROM currentcashires 
        `)
        return allCashires.rows
    }
}
