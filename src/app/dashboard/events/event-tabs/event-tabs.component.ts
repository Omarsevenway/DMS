import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {EventsService} from '../../../@core/mock/common/events.service';

@Component({
  selector: 'app-tabs1112',
  templateUrl: './event-tabs.component.html',
  styleUrls: ['./event-tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventTabsComponent implements OnInit {

  constructor(public eventService: EventsService) { }

  ngOnInit() {
  }

}
