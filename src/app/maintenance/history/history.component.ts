import { ScheduleMaintenanceComponent } from '../schedule-maintenance/schedule-maintenance.component';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryComponent implements OnInit {

  constructor(private dialogService: NbDialogService) { }

  ngOnInit() {
  }

  schedule() {
    this.dialogService.open(ScheduleMaintenanceComponent);
  }

}
