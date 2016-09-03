import { Component, OnInit }  from '@angular/core';


import { IUser } from './user'
import { UserService } from './user.service';

@Component({
    templateUrl: 'app/users/user-list.component.html',
    styleUrls: ['app/users/user-list.component.css']

})
export class UserListComponent implements OnInit {
    pageTitle: string = 'Users';
    listFilter: string = '';
    errorMessage: string;
    users: IUser[];

    constructor(private _userService: UserService) {

    }

    ngOnInit(): void {
        this._userService.getUsers()
            .subscribe(
            users => this.users = users,
            error => this.errorMessage = <any>error);
    }


}