import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-schedule-maintenance-time',
  templateUrl: './scdedule-maintenance-time.component.html',
  styleUrls: ['./scdedule-maintenance-time.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleMaintenanceTimeComponent implements OnInit {

  @Input()
  time: string;

  constructor() { }

  ngOnInit() {
  }

}
