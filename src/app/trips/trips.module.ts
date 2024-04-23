import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TripsRoutingModule } from './trips-routing.module';
import { TripsComponent } from './trips.component';
import { SharedModule } from '../shared/shared.module';
import { ScheduleTripComponent } from './schedule-trip/schedule-trip.component';
import { TripCard1Component } from './schedule-trip/trip-card1/trip-card1.component';
import { TripCard2Component } from './schedule-trip/trip-card2/trip-card2.component';
import { TripCard3Component } from './schedule-trip/trip-card3/trip-card3.component';
import { TripsOverviewComponent } from './trips-overview/trips-overview.component';
import { Trip1Component } from './trips-overview/trip1/trip1.component';
import { Trip2Component } from './trips-overview/trip2/trip2.component';
import { Trip3Component } from './trips-overview/trip3/trip3.component';
import { Trip4Component } from './trips-overview/trip4/trip4.component';
import { TripTabsComponent } from './trips-overview/trip-tabs/trip-tabs.component';
import { RouteDetailsComponent } from './trips-overview/route-details/route-details.component';
import { DurationComponent } from './trips-overview/duration/duration.component';
import { IdleComponent } from './trips-overview/idle/idle.component';
import { TripDetailsComponent } from './trips-overview/trip-details/trip-details.component';
import { AvgFuelConsComponent } from './trips-overview/avg-fule-cons/avg-fule-cons.component';
import { AvgSpeedComponent } from './trips-overview/avg-speed/avg-speed.component';
import { TripEventsComponent } from './trips-overview/trip-events/trip-events.component';
import { ErrorsComponent } from './trips-overview/errors/errors.component';
import { WarningsComponent } from './trips-overview/warnings/warnings.component';
import { TripAssignement2Component } from './trip-assignement2/trip-assignement2.component';
import { NewTripDetailsComponent } from './trip-assignement2/new-trip-details/new-trip-details.component';
import { TripCostComponent } from './trip-assignement2/trip-cost/trip-cost.component';
import { CostComponent } from './trip-assignement2/cost/cost.component';

@NgModule({
  declarations: [TripsComponent, ScheduleTripComponent, TripCard1Component, TripCard2Component, TripCard3Component, TripsOverviewComponent, Trip1Component, Trip2Component, Trip3Component, Trip4Component, TripTabsComponent, RouteDetailsComponent, DurationComponent, IdleComponent, TripDetailsComponent, AvgFuelConsComponent, AvgSpeedComponent, TripEventsComponent, ErrorsComponent, WarningsComponent, TripAssignement2Component, NewTripDetailsComponent, TripCostComponent, CostComponent],
  imports: [
    CommonModule,
    TripsRoutingModule,
    SharedModule
  ]
})
export class TripsModule { }
