/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TripsService} from './trips.service';
import {VehiclesService} from './vehicles.service';
import {DriversService} from './drivers.service';
import {EventsService} from './events.service';

const SERVICES = [ TripsService, VehiclesService, DriversService, EventsService ];

@NgModule({
  imports: [CommonModule],
})
export class CommonMockModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CommonMockModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
