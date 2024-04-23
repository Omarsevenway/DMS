import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-history-list-item',
  templateUrl: './history-list-item.component.html',
  styleUrls: ['./history-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryListItem implements OnInit {

  @Input()
  vehicleName: string;

  @Input()
  cost: string;

  @Input()
  status: string;

  @Input()
  tasks: { name: string, price: number }[];

  showDetails = true;

  constructor() { }

  ngOnInit() {
  }

  get outOfService() {
    return this.status === 'OUT OF SERVICE';
  }

  get onRoute() {
    return this.status === 'EN ROUTE';
  }

  get iconSrc() {
    return this.status === 'OUT OF SERVICE' ? './assets/images/with status@2x8.png' : './assets/images/Group@2x.png';
  }

  get tasksNames() {
    return this.tasks.map(x => x.name).join(', ');
  }

  detailsClick() {
    this.showDetails = !this.showDetails;
  }

}
