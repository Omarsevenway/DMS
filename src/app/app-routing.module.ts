import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: 'overview', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: 'vehicles', loadChildren: './vehicles/vehicles.module#VehiclesModule' },
  { path: 'trips', loadChildren: './trips/trips.module#TripsModule' },
  { path: 'maintenance', loadChildren: './maintenance/maintenance.module#MaintenanceModule' },
  { path: 'analytics', loadChildren: './analytics/analytics.module#AnalyticsModule' },
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
