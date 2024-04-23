import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintenanceRoutingModule } from './maintenance-routing.module';
import { MaintenanceComponent } from './maintenance.component';
import { SharedModule } from '../shared/shared.module';
import { MaintenancePlannerComponent } from './maintenance-planner/maintenance-planner.component';
import { MaintenanceTimetableComponent } from './maintenance-planner/maintenance-timetable/maintenance-timetable.component';
import { MaintennaceTableviewComponent } from './maintenance-planner/maintenance-tableview/maintenance-tableview.component';
import { MaintenanceVisitComponent } from './maintenance-planner/maintenance-visit/maintenance-visit.component';
import { ScheduleMaintenanceComponent } from './schedule-maintenance/schedule-maintenance.component';
import { ScheduleMaintenanceTimeComponent } from './schedule-maintenance/scdedule-maintenance-time/scdedule-maintenance-time.component';
import { HistoryComponent } from './history/history.component';
import { HistoryTabsComponent } from './history/history-tabs/history-tabs.component';
import { HistoryListItem } from './history/history-list-item/history-list-item.component';
import { NbDialogModule } from '@nebular/theme';

@NgModule({
  declarations: [
    MaintenanceComponent,
    MaintenancePlannerComponent,
    MaintenanceTimetableComponent,
    MaintennaceTableviewComponent,
    MaintenanceVisitComponent,
    ScheduleMaintenanceComponent,
    ScheduleMaintenanceTimeComponent,
    HistoryComponent,
    HistoryTabsComponent,
    HistoryListItem,
  ],
  entryComponents: [
    ScheduleMaintenanceComponent
  ],
  imports: [
    CommonModule,
    MaintenanceRoutingModule,
    SharedModule,
    NbDialogModule.forChild(),
  ]
})
export class MaintenanceModule { }
