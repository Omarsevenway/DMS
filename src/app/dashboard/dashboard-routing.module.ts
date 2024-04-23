import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { RealTimeDataComponent } from './real-time-data/real-time-data.component';
import { VehiclesOverviewComponent } from './vehicles-overview2/vehicles-overview.component';

const routes: Routes = [
  { path: 'events', component: EventsComponent },
  { path: 'real-time-data', component: RealTimeDataComponent },
  { path: 'vehicles-overview', component: VehiclesOverviewComponent },
  { path: '', redirectTo: 'vehicles-overview', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
