import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { billRouting} from './bill.routing';
import { BillListComponent } from './bill-list.component';
import { BillDetailComponent } from './bill-detail.component';
import { BillFilterPipe } from './bill-filter.pipe';
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
    BillFilterPipe
  ],
  providers: [
    BillService, 
    UserService
  ]
})
export class BillModule { }