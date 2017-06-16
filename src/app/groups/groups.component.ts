import { Component, OnInit, Input } from '@angular/core';
import { GroupService } from './group.service';
import { AccountService } from '../account/account.service';
import { Group } from './group';

@Component({
  selector: 'iochti-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css'],
})
export class GroupsComponent implements OnInit {
  private groups: Group[];
  private groupsFetching: boolean;
  private errorMessage: string;
  private isModalOpen: boolean;

  constructor(
    private _group: GroupService,
    private _account: AccountService,
  ) {}

  ngOnInit() {
    this.isModalOpen = false;
    this.groupsFetching = true;
    this.listGroups()
  }

  listGroups() {
    const id = this._account.loggedUser.id;
    this._group.getGroups(id)
      .then(groups => {
        this.groups = groups;
        this.groupsFetching = false;
      })
      .catch(err => this.errorMessage = err);
  }

  handleOpenModal() {
    this.isModalOpen = !this.isModalOpen
    console.log(this.isModalOpen);
  }
}
