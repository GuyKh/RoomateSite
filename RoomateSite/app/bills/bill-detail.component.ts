import {Component, OnInit} from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';
import { BillService } from './bill.service';
import { UserService } from '../users/user.service';
import { IBill } from './bill';

@Component({
    templateUrl: 'app/bills/bill-detail.component.html'
})
export class BillDetailComponent implements OnInit{
    pageTitle: string = 'Bill Detail';
    bill: IBill;
    errorMessage: string;
    private sub: any;
    userName: string;

    constructor(private _routeParams: RouteParams, private _router: Router, private _billService: BillService, private _userService: UserService){
    }

    ngOnInit() {
        if (!this.bill) {
            let id = +this._routeParams.get('id');
            // this.pageTitle += `: ${id}`;
            this.getBill(id);
        }
    }


    getUser(id: number){
        this._userService.getUser(id).subscribe(
            user => this.userName = user.userName,
            error => this.errorMessage = <any>error);
    }

    getBill(id: number) {
        this._billService.getBill(id).subscribe(
            bill => this.setBill(bill),
            error => this.errorMessage = <any>error);
    }

    setBill(bill: IBill){
        if (bill){
            this.bill = bill;
            this.getUser(bill.payerId);
        }
        
    }

    onBack(): void{
        this._router.navigate(['Bills']);
    }
}
