import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { AllCashires } from './Entities/AllCashiersEntity'
import { CurrentCashires } from './Entities/CurrentCashiresEntity'

@Injectable()
export class dbService {
    constructor(
        @InjectRepository(AllCashires)
        private allCashiresRepository: Repository<AllCashires>,
        @InjectRepository(CurrentCashires)
        private currentCashiresRepository: Repository<CurrentCashires>,
    ){}

    async CreateCashire(cashire: ICashier){
        return 
    }
        
    async getTargetCashiers1(){
        return 
    }

    // getTargetCashiers2
    // getAllCashiers
}
