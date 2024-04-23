import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'event-type',
  templateUrl: './event-type.component.html',
  styleUrls: ['./event-type.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventTypeComponent implements OnInit {

  statuses = [
    {
      status: 'success',
      message: 'Success'
    },
    {
      status: 'danger',
      message: 'Error'
    },
    {
      status: 'warning',
      message: 'Warning'
    },
  ];

  private message;

  @Input() status: string;

  constructor() {

  }

  ngOnInit() {
  }

}
