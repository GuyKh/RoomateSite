import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


import { IUser } from './user';

@Injectable()
export class UserService {
    private _usersUrl = 'api/users/users.json';

    constructor(private _http: Http) { }

    getUsers(): Observable<IUser[]> {
        return this._http.get(this._usersUrl)
            .map((response: Response) => <IUser[]>response.json())
            .do(data => console.log("All: " +  JSON.stringify(data)))
            .catch(this.handleError);
    }


    getUser(id: number): Observable<IUser> {
        return this.getUsers()
            .map((users: IUser[]) => users.find(p => p.userId === id));
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}