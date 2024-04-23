import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {Event} from '../../../@core/interfaces/common';

@Component({
  selector: 'vehicle-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventComponent implements OnInit {

  @Input() event: Event;

  formatDate(date: Date) {
    return `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
  }

  formatTime(date: Date) {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    let sign = 'AM';

    if (hours >= 12) {
      hours -= 12;
      sign = 'PM';
    }
    return `${hours}:${minutes}${sign}`;
  }

  constructor() { }

  ngOnInit() {
  }

}
