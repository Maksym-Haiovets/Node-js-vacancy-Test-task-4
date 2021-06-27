// TS types, interfaces, enums etc
// Describe TS interface Shop, Cashier, CashRegister.

interface IShop {
    Name: String,
    city: String,
    Address: String
}

enum Sex {
    Men = 'Men',
    Woman = 'Woman'
}
interface ICashier {
    Fname: String,
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
interface CashRegister {// enam
    NumberOFCashRegister: NumberOFCashRegister
}

/*
{
    "Fname": "luba",
    "Lname": "Hayovets",
    "Age": "20",
    "sex": "Woman",
    "yearsOfExperienc": "5",
    "Previous_job": "Arsen",
    "worksInShifts": "undefined",
    "ShopAddress": "Shevchenka 43",
    "NumberOFCashRegister": "8",
    "City": "Lviv"
}
*/