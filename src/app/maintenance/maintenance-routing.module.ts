import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaintenanceComponent } from './maintenance.component';
import { MaintenancePlannerComponent } from './maintenance-planner/maintenance-planner.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  { path: '', component: MaintenanceComponent },
  { path: 'maintenance-planner', component: MaintenancePlannerComponent },
  { path: 'history', component: HistoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenanceRoutingModule { }
