import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { UserListComponent } from './user-list.component';


export const userRoutes: Routes = [
    { path: 'users', component: UserListComponent }
];

export const userRouting: ModuleWithProviders =
    RouterModule.forChild(userRoutes);