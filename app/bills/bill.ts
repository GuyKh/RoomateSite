export interface IBill {
    billId: number;
    billTitle: string;
    amount: number;
    date: Date;
    payerId: number;
    additionalInfo: string;
    category: BillCategory;

}

export class Bill implements IBill {

    constructor (
        public billId: number,
        public billTitle: string,
        public category: BillCategory,
        public payerId: number,
        public amount: number,
        public date: Date,
        public additionalInfo: string) {

        }

}

export enum BillCategory {
    None,
    Electric,
    Water,
    Gas,
    Municipal,
    Vaad,
    Shopping,
    Other
}
