enum Sex {
    Men = 'Men',
    Woman = 'Woman'
}
enum NumberOFCashRegister {
    CashRegister_1 = 1,
    CashRegister_2 = 2,
    CashRegister_3 = 3,
    CashRegister_4 = 4,
    CashRegister_5 = 5,
    CashRegister_6 = 6,
    CashRegister_7 = 7,
    CashRegister_8 = 8,
    CashRegister_9 = 9,
    CashRegister_10 = 10,
    CashRegister_11 = 11,
    CashRegister_12 = 12,
}
////
interface IShop {
    Name: String,
    city: String,
    Address: String
}

interface CashRegister {
    NumberOFCashRegister: NumberOFCashRegister
}

interface ICashier {
    Fname: string,
    Lname: String,
    Age: Number,
    sex: Sex,
    yearsOfExperience: Number,
    Previous_job: String,
    worksInShifts: String,
    ShopAddress: String,
    NumberOFCashRegister: NumberOFCashRegister,
    City: String,
}