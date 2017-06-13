import { Component } from '@angular/core'
import { OnInit } from '@angular/core'
import { AccountService} from '../account/account.service'

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  loginUrl: string;
  errorMessage: string;

  constructor(private accountService: AccountService) {}
  ngOnInit() {
    this.getURL()
  }

  getURL(): void {
    this.accountService.getLoginUrl()
      .then(accountUrl => this.loginUrl = accountUrl.connection_url)
  }
}
