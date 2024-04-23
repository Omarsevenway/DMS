import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehiclesComponent } from './vehicles.component';
import { FleetComponent } from './fleet/fleet.component';
import { VehiclesAssignmentComponent } from './vehicles-assignment/vehicles-assignment.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';

const routes: Routes = [
  { path: '', component: VehiclesComponent },
  { path: 'vehicles-list', component: FleetComponent },
  { path: 'vehicles-assignment', component: VehiclesAssignmentComponent },
  { path: 'vehicle-details', component: VehicleDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiclesRoutingModule { }
