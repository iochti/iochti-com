import { Component, Input } from '@angular/core'
import { Account } from '../account/account';
@Component({
  selector: 'iochti-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Input() account: Account;
}
