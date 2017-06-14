import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { AccountURL } from './account-url';
import { Account } from './account';


@Injectable()
export class AccountService {
  private headers = new Headers({'Content-Type': 'application/json'});
  loggedUser: Account
  private loginUrl = "http://127.0.0.1:4141/login"
  private authUrl = "http://127.0.0.1:4141/auth"
  private accountUrl = "http://127.0.0.1:4141/user"
  constructor(private http: Http) {}

  getLoginUrl(): Promise<any> {

    return this.http.get(this.loginUrl, {withCredentials: true})
      .toPromise()
      .then(res => {
        res.headers.toJSON()
        let headers = res.headers;
        const resValue = res.json();
        if(resValue.connection_url) {
          return resValue as AccountURL
        }
        this.loggedUser = resValue as Account;
        localStorage.setItem("userid", this.loggedUser.id);
        return { connection_url: "" } as AccountURL;
      })
      .catch(this.handleError)
  }

  getAuth(code, state): Promise<any> {

    return this.http.get(
      this.authUrl+`?code=${code}&state=${state}`,
      {withCredentials: true},
    )
      .toPromise()
      .then(response => {
        this.loggedUser = response.json() as Account;
        localStorage.setItem("userid", this.loggedUser.id);
        return this.loggedUser;
      })
      .catch(this.handleError)
  }

  getAccount(id: string): Promise<Account> {
    return this.http.get(this.accountUrl+`?categ=id&value=${id}`)
      .toPromise()
      .then(res => {
        this.loggedUser = res.json() as Account;
        return this.loggedUser;
      })
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
