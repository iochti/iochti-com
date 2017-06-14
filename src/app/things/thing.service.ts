import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Thing } from './thing';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ThingService {
  private URL = "http://127.0.0.1:4141/thing";
  constructor(private _http: Http) {}

  getThings(groupId: string): Promise<Thing> {
    console.log(groupId);
    return this._http.get(this.URL+`?groupid=${groupId}`)
      .toPromise()
      .then(res => res.json() as Thing)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
