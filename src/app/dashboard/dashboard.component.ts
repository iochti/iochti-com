import { Component, OnInit } from '@angular/core';
import { AccountService} from '../account/account.service'
import { ActivatedRoute } from '@angular/router';
import { Account } from '../account/account';

@Component({
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  private code: string;
  private state: string;
  private account: Account;

  constructor(
    private route: ActivatedRoute,
    private accountSvc: AccountService
  ){}

  ngOnInit() {
    this.route
      .queryParams
      .subscribe(params => {
        this.code = params["code"];
        this.state = params["state"];
      });
      if(!this.accountSvc.loggedUser) {
        this.authUser()
      } else {
        this.account = this.accountSvc.loggedUser;
      }
  }

  authUser() {
    if(this.code !== "" && this.state !== ""){
      this.accountSvc
        .getAuth(this.code, this.state)
        .then(account => this.account = account);
    }
  }
};
