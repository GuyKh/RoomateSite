import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { userRouting} from './user.routing';
import { UserListComponent } from './user-list.component';
import { UserService } from './user.service';
import {AddUserComponent} from './user-add.component';

@NgModule({
    imports: [
        FormsModule,
        SharedModule,
        userRouting
    ],
    declarations: [
        UserListComponent,
        AddUserComponent
    ],
    providers: [
        UserService
    ]
})
export class UserModule { }