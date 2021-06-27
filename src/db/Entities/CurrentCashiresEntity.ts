import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CurrentCashires')
export class CurrentCashires {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Fname: String;
  
    @Column()
    Lname: String;
  
    @Column()
    Age: Number;
  
    @Column()
    sex: Sex;
  
    @Column()
    yearsOfExperience: Number;
  
    @Column()
    Previous_job: String;
  
    @Column()
    worksInShifts: String;
  
    @Column()
    ShopAddress: String
  
    @Column()
    NumberOFCashRegister: NumberOFCashRegister;
  
    @Column()
    city: String;
}