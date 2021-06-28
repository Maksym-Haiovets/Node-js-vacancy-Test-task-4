import { HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';
const db = require('../db/db')

@Injectable()
export class DBHelperService {
    constructor(){}
    async CreateCashire(cashire: ICashier, table: string){
        const createdCashire = await db.query(`INSERT INTO ${table} (
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

    async DeleteCashire(id: number){
        const createdCashire = await db.query(`
            SELECT * FROM currentcashires WHERE id = ${id}
        `)
        let cashire: ICashier = {
            Fname: createdCashire.rows[0].fname,
            Lname: createdCashire.rows[0].lname,
            Age: createdCashire.rows[0].age,
            sex: createdCashire.rows[0].sex,
            yearsOfExperience: createdCashire.rows[0].yearsofexperience,
            Previous_job: createdCashire.rows[0].previous_job,
            worksInShifts: createdCashire.rows[0].worksinshifts,
            ShopAddress: createdCashire.rows[0].shopaddress,
            NumberOFCashRegister: createdCashire.rows[0].numberofcashregister,
            City: createdCashire.rows[0].city
        };

        this.CreateCashire(cashire, 'formercashires')
        return await db.query(`DELETE FROM currentcashires WHERE id = ${id}`)
    }

    async UpdateCashire(id: number, table: string, cashire: ICashier){
        const createdCashire: ICashier = await db.query(`
            SELECT * FROM currentcashires WHERE id = ${id}
        `)
        if(!createdCashire){
            throw new HttpException('this cashire is not exist', HttpStatus.NOT_FOUND)
        }
        const updatedCashire =  await db.query(`
            UPDATE ${table} 
            SET 
                fname = '${cashire.Fname}',
                lname = '${cashire.Lname}',
                age = ${cashire.Age},
                sex = '${cashire.sex}',
                yearsofexperience = ${cashire.yearsOfExperience},
                previous_job = '${cashire.Previous_job}',
                worksinshifts = '${cashire.worksInShifts}',
                shopaddress = '${cashire.ShopAddress}',
                numberofcashregister = ${cashire.NumberOFCashRegister},
                city = '${cashire.City}'
            WHERE id = ${id};
        `) 
        return updatedCashire.rows[0]
    }

    async GetCashire(id: number, table: string){
        const cashire = await db.query(`SELECT * FROM ${table} WHERE id = ${id}`)
        if(!cashire){
            throw new HttpException('this cashire is not exist', HttpStatus.NOT_FOUND)
        }
        return cashire.rows
    }
}