import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-schedule-maintenance',
  templateUrl: './schedule-maintenance.component.html',
  styleUrls: ['./schedule-maintenance.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleMaintenanceComponent implements OnInit {

  constructor(protected dialogRef: NbDialogRef<any>) { }

  ngOnInit() {
  }

  action() {
    this.dialogRef.close();
  }

}
