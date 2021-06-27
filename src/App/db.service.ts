import { Injectable } from '@nestjs/common';
const db = require('../db/db')

@Injectable()
export class dbService {
    constructor(){}

    async CreateCashire(cashire: ICashier){
        const createdCashire = await db.query(`INSERT INTO formercashires (
                Fname,
                Lname,
                Age,
                sex,
                yearsOfExperience,
                Previous_job,
                worksInShifts,
                ShopAddress,
                NumberOFCashRegister,
                City
            )
            values
            ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) 
            RETURNING *`,
            [ 
                cashire.Fname,
                cashire.Lname,
                cashire.Age,
                cashire.sex,
                cashire.yearsOfExperience,
                cashire.Previous_job,
                cashire.worksInShifts,
                cashire.ShopAddress,
                cashire.NumberOFCashRegister,
                cashire.City
            ])
            return createdCashire.rows[0]
    }
        
    async getTargetCashiers1(){
        const allCashires = await db.query(`
            select * from formercashires 
                WHERE city = 'Lviv' 
                AND yearsofexperience >= 5 
                AND (previous_job = 'Arsen' OR previous_job = 'Silpo')
            union all
            select * from currentcashires 
                WHERE city = 'Lviv' 
                AND yearsofexperience >= 5 
                AND (previous_job = 'Arsen' OR previous_job = 'Silpo')
        `)
        return allCashires.rows
    }

    async getTargetCashiers2(){

    }

    // getAllCashiers
}
