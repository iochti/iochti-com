import {Injectable} from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Group } from './group';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GroupService {
  private URL = "http://127.0.0.1:4141/group"
  groups: Group[]
  constructor(private _http: Http) {}

  getGroups(userId: string): Promise<Group[]> {
    return this._http.get(this.URL+`?accountid=${userId}`)
      .toPromise()
      .then(res => {
        this.groups = res.json();
        return res.json() as Group[]
      })
      .catch(this.handleError);
  }

  createGroup(group: Group): Promise<Group> {
    return this._http.post(this.URL, group)
      .toPromise()
      .then(res =>{
        this.groups.push(res.json());
        return res.json() as Group;
      })
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
