import { Component } from '@angular/core';
import {UserService} from './user.service';
import {User} from './user';

@Component({
    selector: 'user-add',
    templateUrl: 'app/users/user-add.component.html'
})
export class AddUserComponent
{
    private userId: number;
    private username: string;
    private phone: string;
    private errorMessage: string;
    public ModalIsVisible: boolean;


    constructor(private _userService : UserService) {        
    }


    init(userId: number){
this.errorMessage = "";
        if (userId == -1){
            this.userId = -1;
            this.username = "";
            this.phone = "";
            this.show();
        } else {
            this._userService.getUser(userId)
            .subscribe(
            user => {
                this.userId = user.userId;
                this.username = user.userName;
                this.phone = user.phone;
                
            this.show();
            });
        }
    }

    show(){      
        //this.ModalIsVisible = true;
    }


    addOrUpdateUser(){
        this._userService.addOrUpdateUser(new User(this.userId, this.username, this.phone));
        this.hide();
    }

    hide(){

        
        $('#addUserModal').modal('hide');
        //this.ModalIsVisible = false;
    }
    



}