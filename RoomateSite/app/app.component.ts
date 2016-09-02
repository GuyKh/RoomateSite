import {Component} from 'angular2/core';
import {BillListComponent} from './bills/bill-list.component';
import {BillDetailComponent} from './bills/bill-detail.component';
import {WelcomeComponent} from './home/welcome.component';
import {BillService} from './bills/bill.service';
import {UserService} from './users/user.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import 'rxjs/Rx';   // Load all features

@Component({
    selector: 'pm-app',
    template:`
        <div>
            <nav class='navbar navbar-default'>
                <div class='container-fluid'>
                    <a class='navbar-brand'>{{pageTitle}}</a>
                    <ul class='nav navbar-nav'>
                        <li><a [routerLink]="['Welcome']">Home</a></li>
                        <li><a [routerLink]="['Bills']">Bills List</a></li>
                    </ul>
                </div>
            </nav>
            <div class='container'>
                <router-outlet></router-outlet>
            </div>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [BillService, UserService, HTTP_PROVIDERS, ROUTER_PROVIDERS]
})
@RouteConfig([
  { path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true },
  { path: '/bills', name: 'Bills', component: BillListComponent },
  { path: '/bills/:id', name: 'BillDetail', component: BillDetailComponent }
])
export class AppComponent {
    pageTitle: string = 'Roomate Site';
}
