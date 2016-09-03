import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { billRouting} from './bill.routing';
import { BillListComponent } from './bill-list.component';
import { BillDetailComponent } from './bill-detail.component';
import { BillTitleFilterPipe } from './bill-filter-title.pipe';
import { BillDateFilterPipe } from './bill-filter-date.pipe';
import { BillService } from './bill.service';
import { UserService } from '../users/user.service';

@NgModule({
  imports: [
    FormsModule,
    SharedModule,
    billRouting
  ],
  declarations: [
    BillListComponent,
    BillDetailComponent,
    BillTitleFilterPipe,
    BillDateFilterPipe
  ],
  providers: [
    BillService, 
    UserService
  ]
})
export class BillModule { }