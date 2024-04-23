import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TripsComponent } from './trips.component';
import { ScheduleTripComponent } from './schedule-trip/schedule-trip.component';
import { TripsOverviewComponent } from './trips-overview/trips-overview.component';
import { TripAssignement2Component } from './trip-assignement2/trip-assignement2.component';

const routes: Routes = [
  { path: '', component: TripsComponent },
  { path: 'schedule-trip', component: ScheduleTripComponent },
  { path: 'trips-overview', component: TripsOverviewComponent },
  { path: 'trip-assignment', component: TripAssignement2Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TripsRoutingModule { }
