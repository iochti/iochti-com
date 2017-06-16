import { Component, Input, OnInit } from '@angular/core'
import { GroupService } from '../groups/group.service';
import { Group } from '../groups/group';

@Component({
  selector: 'iochti-modal-group',
  templateUrl: './modal-group.component.html',
  styleUrls: ['./modal-group.component.css'],
})
export class ModalGroupComponent implements OnInit  {
  @Input() public isOpen: boolean
  private errorMessage: string
  public group: Group

  ngOnInit() {
    this.group = new Group()
    this.group.accountId = localStorage.getItem("userid")
  }

  constructor(private _group: GroupService) {}

  closeModal() {
    this.isOpen = false
  }

  saveUser() {
    if(this.group.name !== "" && this.group.description !== ""){
      this._group.createGroup(this.group).then(() => {
        this.isOpen = false;
        this.group = new Group()
      });
    }
  }
}
