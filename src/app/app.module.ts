import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { CookieModule } from 'ngx-cookie';

import { AppComponent } from './app.component';
import { Account } from './account/account';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { ThingsComponent } from './things/things.component';
import { GroupsComponent } from './groups/groups.component';
import { GroupComponent } from './group/group.component';
import { ModalGroupComponent} from './modal-group/modal-group.component';
import { TempGraphComponent } from './temp-graph/temp-graph.component';

import { AccountService } from './account/account.service';
import { GroupService } from './groups/group.service';
import { ThingService } from './things/thing.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard',
    component: DashboardComponent,
    data: {account: {}},
    children: [
      { path: 'things', component: ThingsComponent },
      { path: 'groups', component: GroupsComponent }
    ]
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ModalGroupComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    MenuComponent,
    ThingsComponent,
    GroupsComponent,
    GroupComponent,
    TempGraphComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    CookieModule.forRoot(),
  ],
  providers: [
    AccountService,
    GroupService,
    ThingService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
