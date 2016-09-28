import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { BillListComponent } from './bill-list.component';
import { BillDetailComponent } from './bill-detail.component';

export const billRoutes: Routes = [
    { path: 'bills', component: BillListComponent },
    { path: 'bill/:id', component: BillDetailComponent }
];

export const billRouting: ModuleWithProviders = RouterModule.forChild(billRoutes);
