import { Injectable } from '@nestjs/common';
import { DBHelperService } from './db.helper'
const db = require('../db/db')

@Injectable()
export class dbService {
    constructor(private readonly dbHelperService: DBHelperService){}

    async CreateCashire(cashire: ICashier): Promise<ICashier>{
        return this.dbHelperService.CreateCashire(cashire, 'currentcashires');
    }
      
    async DeleteCashire(id: number): Promise<void>{
        return this.dbHelperService.DeleteCashire(id);
    }

    async UpdateCashire(id: number, table: string, cashire: ICashier): Promise<ICashier>{
        return this.dbHelperService.UpdateCashire(id, table, cashire);
    }

    async GetCashireByID(id: number, table: string): Promise<ICashier>{
        return this.dbHelperService.GetCashireByID(id, table)
    }

    ///////////
    async getTargetCashiers1(): Promise<ICashier[]>{
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

    async getTargetCashiers2(): Promise<ICashier[]>{
        const allCashires = await db.query(`
            SELECT * FROM currentcashires
                WHERE MOD(numberofcashregister,2) = 1
                AND shopaddress = 'Shevchenko 100'
                AND worksinshifts LIKE '%monday%'
                AND worksinshifts LIKE '%23:00 - 07:00%'
        `)
        return allCashires.rows
    }

    async getAllCashiers (): Promise<ICashier[]>{
        const allCashires = await db.query(`
            SELECT * FROM formercashires
            UNION ALL  
            SELECT * FROM currentcashires 
        `)
        return allCashires.rows
    }

    async GetCashire(table: string, age: number, gender: Gender, yearsOfExperience: number): Promise<ICashier>{
        return this.dbHelperService.GetCashire(table, age, gender, yearsOfExperience);
    }
}
