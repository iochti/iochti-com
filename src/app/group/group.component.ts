import { Component, Input } from '@angular/core';
import { Group } from '../groups/group'

@Component({
  selector: 'iochti-group',
  templateUrl: './group.component.html',
})
export class GroupComponent {
  @Input() private group: Group
}
