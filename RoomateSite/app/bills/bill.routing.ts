import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { BillListComponent } from './bill-list.component';
import { BillDetailComponent } from './bill-detail.component';
import { BillGraphComponent} from './bill-graph.component';

export const billRoutes: Routes = [
    { path: 'bills', component: BillListComponent },
    { path: 'bill/:id', component: BillDetailComponent },
    { path: 'billsGraph', component: BillGraphComponent }
];

export const billRouting: ModuleWithProviders =
    RouterModule.forChild(billRoutes);