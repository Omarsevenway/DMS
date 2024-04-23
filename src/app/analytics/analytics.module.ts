import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticsRoutingModule } from './analytics-routing.module';
import { AnalyticsComponent } from './analytics.component';
import { RevenueComponent } from './revenue/revenue.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { EmissionComponent } from './emission/emission.component';
import { TripsPerformanceComponent } from './trips-performance/trips-performance.component';
import { IdleCostComponent } from './idle-cost/idle-cost.component';
import { FuelCostComponent } from './fuel-cost/fuel-cost.component';
import { DrivingDistanceComponent } from './driving-distance/driving-distance.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AnalyticsComponent,
    RevenueComponent,
    ExpensesComponent,
    EmissionComponent,
    TripsPerformanceComponent,
    IdleCostComponent,
    FuelCostComponent,
    DrivingDistanceComponent
  ],
  imports: [
    CommonModule,
    AnalyticsRoutingModule,
    SharedModule
  ]
})
export class AnalyticsModule { }
