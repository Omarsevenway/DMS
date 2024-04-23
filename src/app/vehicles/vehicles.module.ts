import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiclesRoutingModule } from './vehicles-routing.module';
import { VehiclesComponent } from './vehicles.component';
import { SharedModule } from '../shared/shared.module';
import { FleetComponent } from './fleet/fleet.component';
import { VehiclesTabsComponent } from './fleet/vehicles-tabs/vehicles-tabs.component';
import { VehicleComponent } from './fleet/vehicle/vehicle.component';
import { VehicleStatusComponent } from './fleet/vehicle-status/vehicle-status.component';
import { VehiclesAssignmentComponent } from './vehicles-assignment/vehicles-assignment.component';
import { AssignVehiclesComponent } from './vehicles-assignment/assign-vehicles/assign-vehicles.component';
import { AssignedVehicleComponent } from './vehicles-assignment/assigned-vehicle/assigned-vehicle.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { CommonInformationComponent } from './vehicle-details/common-information/common-information.component';
import { StatusComponent } from './vehicle-details/status/status.component';
import { AverageSpeedComponent } from './vehicle-details/common-information/average-speed/average-speed.component';
import { VehicleConditionComponent } from './vehicle-details/vehicle-condition/vehicle-condition.component';
import { KeyIndicatorsComponent } from './vehicle-details/key-indicators/key-indicators.component';
import { EngineComponent } from './vehicle-details/key-indicators/engine/engine.component';
import { BatteryComponent } from './vehicle-details/key-indicators/battery/battery.component';
import { OilComponent } from './vehicle-details/key-indicators/oil/oil.component';
import { GasComponent } from './vehicle-details/key-indicators/gas/gas.component';
import { DetailsComponent } from './vehicle-details/details/details.component';
import { Table2Component } from './vehicle-details/details/table2/table2.component';
import { MaintenanceComponent } from './vehicle-details/maintenance/maintenance.component';
import { OverdueComponent } from './vehicle-details/maintenance/overdue/overdue.component';
import { DueSoonComponent } from './vehicle-details/maintenance/due-soon/due-soon.component';
import { TripComponent } from './vehicle-details/trip/trip.component';
import {VehiclesService} from '../@core/mock/common/vehicles.service';
import {EventsService} from '../@core/mock/common/events.service';
import {TabHeaderComponent} from './fleet/vehicles-tabs/tab-header/tab-header.component';
import {AssignedVehiclesHeaderComponent} from './vehicles-assignment/assign-vehicles/assigned-vehicles-header/assigned-vehicles-header.component';
import {NotAssignedVehiclesHeaderComponent} from './vehicles-assignment/assign-vehicles/not-assigned-vehicles-header/not-assigned-vehicles-header.component';
import {NbDialogModule, NbDialogService} from '@nebular/theme';
import {VehicleAssignmentPopUpComponent} from './vehicles-assignment-pop-up/vehicles-assignment-pop-up/vehicle-assignment-pop-up.component';
import {DriversService} from '../@core/mock/common/drivers.service';
import {NgxEchartsModule} from 'ngx-echarts';

@NgModule({
  declarations: [
    VehiclesComponent,
    FleetComponent,
    VehiclesTabsComponent,
    VehicleComponent,
    VehicleStatusComponent,
    VehiclesAssignmentComponent,
    AssignVehiclesComponent,
    AssignedVehicleComponent,
    VehicleDetailsComponent,
    CommonInformationComponent,
    StatusComponent,
    AverageSpeedComponent,
    VehicleConditionComponent,
    KeyIndicatorsComponent,
    EngineComponent,
    BatteryComponent,
    OilComponent,
    GasComponent,
    DetailsComponent,
    Table2Component,
    MaintenanceComponent,
    OverdueComponent,
    DueSoonComponent,
    TripComponent,
    VehicleAssignmentPopUpComponent,
    TabHeaderComponent,
    AssignedVehiclesHeaderComponent,
    NotAssignedVehiclesHeaderComponent
  ],
  imports: [
    CommonModule,
    VehiclesRoutingModule,
    SharedModule,
    NgxEchartsModule,
    NbDialogModule.forChild(),
  ],
  entryComponents: [
    VehicleAssignmentPopUpComponent
  ],
  providers: [
    VehiclesService,
    EventsService,
    DriversService,
    NbDialogService
  ]
})
export class VehiclesModule { }
