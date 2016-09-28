import { Component } from '@angular/core';
import {BillService} from './bill.service';
import {UserService} from '../users/user.service';
import {IUser} from '../users/user';
import {Bill, BillCategory} from './bill';

@Component({
    selector: 'bill-add',
    templateUrl: 'app/bills/bill-add.component.html'
})
export class AddBillComponent {
    private billId: number;
    private category: BillCategory;
    private title: string;
    private payerId: number;
    private amount: number;
    private date: any;
    private additionalInfo: string;
    private errorMessage: string;
    private users : IUser[];

    private categories: string[];
    public ModalIsVisible: boolean;



    constructor(private _billService: BillService, private _userService:UserService) {
    }


    init(billId: number) {
        this.errorMessage = "";
        if (billId == -1) {
            this.billId = billId;
            this.title = "";
            this.category = BillCategory.Electric;
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
                    this.category = bill.category;
                    this.show();
                });
        }
    }

    show() {
        this.ModalIsVisible = true;
        this.getUsers();
        this.categories = this.getCategories();
    }

    getCategories() : string[]{
        var categories: string[] = [];
        for(var n in BillCategory) {
            var enumVal = BillCategory[parseInt(n)];
            if (enumVal && typeof(enumVal) === "string")
                categories.push(enumVal);
        }
        return categories;
    }
    
    

    getUsers() : void {
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
        this._billService.addOrUpdateBill(new Bill(this.billId, this.title, this.category, this.payerId, this.amount, this.date, this.additionalInfo));
        this.hide();
    }

    hide() {
        $('#addBillModal').modal('hide');

        this.ModalIsVisible = false;
    }


    set humanDate(e : string) {
        var splitStr = e.split('-');
        let d = new Date(Date.UTC(parseInt(splitStr[0]), parseInt(splitStr[1]) - 1, parseInt(splitStr[2]));
        this.date.setFullYear(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate() + 1);
    }

    get humanDate() {
        if (this.date && this.date instanceof Date)
            return this.date.toISOString().substring(0, 10);
        else if (this.date && this.date instanceof string)
            return this.date;
        else return "";
    }

    set humanCategory(e) {
        this.category = BillCategory[e];
    }

    get humanCategory() {
        if (!this.categories)
            return "";

        if (!this.category)
            return this.categories[0];
        else 
            return this.categories[this.category];
    }

}