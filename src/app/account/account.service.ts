import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { AccountURL } from './account-url';
import { Account } from './account';


@Injectable()
export class AccountService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private loginUrl = "http://localhost:4141/login"
  private authUrl = "http://localhost:4141/auth"

  constructor(private http: Http) {}

  getLoginUrl(): Promise<AccountURL> {
    return this.http.get(this.loginUrl)
      .toPromise()
      .then(response => {
        return response.json() as AccountURL
      })
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
