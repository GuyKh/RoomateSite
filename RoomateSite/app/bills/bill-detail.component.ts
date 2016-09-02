
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { BillService } from './bill.service';
import { UserService } from '../users/user.service';
import { IBill } from './bill';

@Component({
    templateUrl: 'app/bills/bill-detail.component.html'
})
export class BillDetailComponent implements OnInit, OnDestroy{
    pageTitle: string = 'Bill Detail';
    bill: IBill;
    errorMessage: string;
    private sub: any;
    userName: string;

    constructor(private route: ActivatedRoute,
        private router: Router, private _billService: BillService, private _userService: UserService) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getBill(id);
            });
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
        this.router.navigate(['bills']);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
