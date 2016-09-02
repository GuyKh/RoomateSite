export interface IBill{
    billId: number;
    billTitle: string;
    amount: number;
    date: string;
    payerId: number;
    additionalInfo: string;
    
}

export class Bill implements IBill{

    constructor(
        public billId: number,
        public billTitle: string,
        public payerId: number,
        public amount: number,
        public date: string,
        public additionalInfo: string)
        {}
  

}