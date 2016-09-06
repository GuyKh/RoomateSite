import { Component } from '@angular/core';
import {BillService} from './bill.service';
import {UserService} from '../users/user.service';
import {IUser} from '../users/user';
import {Bill} from './bill';

@Component({
    selector: 'bill-add',
    templateUrl: 'app/bills/bill-add.component.html'
})
export class AddBillComponent {
    private billId: number;
    private title: string;
    private payerId: number;
    private amount: number;
    private date: any;
    private additionalInfo: string;
    private errorMessage: string;
    private users : IUser[];
    public ModalIsVisible: boolean;


    set humanDate(e) {
        e = e.split('-');
        let d = new Date(Date.UTC(e[0], e[1] - 1, e[2]));
        this.date.setFullYear(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate() + 1);
    }

    get humanDate() {
        if (this.date && this.date instanceof Date)
            return this.date.toISOString().substring(0, 10);
        else if (this.date && this.date instanceof String)
            return this.date;
        else return "";
    }

    constructor(private _billService: BillService, private _userService:UserService) {
    }


    init(billId: number) {
        this.errorMessage = "";
        if (billId == -1) {
            this.billId = billId;
            this.title = "";
            this.payerId = this.getCurrentUserID();
            this.amount = 0;
            this.date = new Date(); //now.getFullYear() + "-" + now.getMonth() + "-" + now.getDay();
            this.additionalInfo = "";
            this.show();
        } else {
            this._billService.getBill(billId)
                .subscribe(
                bill => {
                    this.billId = bill.billId;
                    this.title = bill.billTitle;
                    this.payerId = bill.payerId;
                    this.amount = bill.amount;
                    this.date = bill.date;
                    this.additionalInfo = bill.additionalInfo;

                    this.show();
                });
        }
    }

    show() {
        this.ModalIsVisible = true;
        this.getUsers();
    }

    getUsers() {
        this._userService.getUsers()
            .subscribe(
                (users: IUser[]) => this.users = users,
                error => this.errorMessage = error
            );
    }

    getCurrentUserID() : number{
        return 1;
    }

    getUser(userId: number): IUser {
        let user : IUser = this.users.find(u => u.userId === userId);

        return user;
    }

    addOrUpdateBill() {
        this._billService.addOrUpdateBill(new Bill(this.billId, this.title, this.payerId, this.amount, this.date, this.additionalInfo));
        this.hide();
    }

    hide() {

        this.ModalIsVisible = false;
    }




}