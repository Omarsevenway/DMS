import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ScheduleMaintenanceComponent } from '../../schedule-maintenance/schedule-maintenance.component';

@Component({
  selector: 'app-maintenance-timetable',
  templateUrl: './maintenance-timetable.component.html',
  styleUrls: ['./maintenance-timetable.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MaintenanceTimetableComponent implements OnInit {

  constructor(private dialogService: NbDialogService) { }

  ngOnInit() {
  }

  schedule() {
    this.dialogService.open(ScheduleMaintenanceComponent);
  }

}
