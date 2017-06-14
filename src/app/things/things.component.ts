import { Component, OnInit, Input } from '@angular/core';
import { ThingService } from './thing.service';
import { GroupService } from '../groups/group.service';
import { Thing } from './thing';
import unionBy from 'lodash/unionBy';

@Component({
  selector: 'iochti-things',
  templateUrl: './things.component.html',
  styleUrls: ['./things.component.css'],
})
export class ThingsComponent implements OnInit {
  private things: Thing[];
  private thingFetching: boolean;
  private errorMessage: string;

  constructor(
    private _thing: ThingService,
    private _group: GroupService,
  ) {}

  ngOnInit() {
    this.thingFetching = true;
    this._group.getGroups(localStorage.getItem("userid")).then(() => this.getThingList())
  }

  getThingList() {
    this._group.groups.forEach(elmt => {
      this._thing.getThings(elmt.id)
        .then(things => {
          console.log(things);
          this.things = unionBy(this.things, things, 'id')
        })
        .catch(err => this.errorMessage = err)
      this.thingFetching = false;
    })
  }
}
