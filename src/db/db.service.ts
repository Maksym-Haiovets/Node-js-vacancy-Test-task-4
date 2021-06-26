import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CurrentCashires, CurrentCashiresDocument} from './Schemes/CurrentCashiersSchema'
import { AllCashires, AllCashiresDocument} from './Schemes/AllCashiersSchema'

@Injectable()
export class dbService {
    constructor(
        @InjectModel(CurrentCashires.name) private currentCashiresModel: Model<CurrentCashiresDocument>,
        @InjectModel(AllCashires.name) private allCashiresModel: Model<AllCashiresDocument>
    ){}
    
    // getAllCashiers
    // getTargetCashiers1
    // getTargetCashiers2
    getHello(): string {
        return 'Hello World!';
    }
}
