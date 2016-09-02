import { Injectable } from 'angular2/core';
import { IBill } from './bill';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BillService {
    private _billsUrl = 'api/bills/bills.json';

    constructor(private _http: Http) { }

    getBills(): Observable<IBill[]> {
        return this._http.get(this._billsUrl)
            .map((response: Response) => <IBill[]>response.json())
            .do(data => console.log("All: " +  JSON.stringify(data)))
            .catch(this.handleError);
    }


    getBill(id: number): Observable<IBill> {
        return this.getBills()
            .map((bills: IBill[]) => bills.find(p => p.billId === id));
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}