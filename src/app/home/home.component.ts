import { Component, OnInit } from '@angular/core'
import { AccountService} from '../account/account.service'
import { Router, NavigationExtras } from '@angular/router';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  loginUrl: string;
  errorMessage: string;

  constructor(private accountService: AccountService, private router: Router) {}
  ngOnInit() {
    this.getURL()
  }

  getURL(): void {
    this.accountService.getLoginUrl()
      .then(accountUrl => {
        if (accountUrl.connection_url) {
          this.loginUrl = accountUrl.connection_url;
        } else {
          this.router.navigate(['/dashboard']);
        }
      });
  }
}
