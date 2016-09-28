import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SharedModule } from '../shared/shared.module';


import { billRouting} from './bill.routing';
import { BillListComponent } from './bill-list.component';
import { BillDetailComponent } from './bill-detail.component';
import { BillTitleFilterPipe } from './bill-filter-title.pipe';
import { BillDateFilterPipe } from './bill-filter-date.pipe';
import { BillSortFilterPipe } from './bill-filter-sort.pipe';
import { BillService } from './bill.service';
import { UserService } from '../users/user.service';
import { AddBillComponent } from './bill-add.component';
import { BillChartComponent } from './bill-chart.component';
import { BillSummaryComponent } from './bill-summary.component';

@NgModule({
  imports: [
    FormsModule,
    SharedModule,
    billRouting,
    ChartsModule
  ],
  declarations: [
    BillListComponent,
    BillDetailComponent,
    BillTitleFilterPipe,
    BillDateFilterPipe,
    AddBillComponent,
    BillChartComponent,
    BillSummaryComponent,
    BillSortFilterPipe
  ],
  providers: [
    BillService, 
    UserService
  ]
})
export class BillModule { }