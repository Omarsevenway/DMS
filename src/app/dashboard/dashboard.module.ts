import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {SharedModule} from '../shared/shared.module';
import {IndicatorsComponent} from './vehicles-overview2/indicators/indicators.component';
import {IndicatorComponent} from './vehicles-overview2/indicator/indicator.component';
import {IndicatorsListComponent} from './vehicles-overview2/indicators-list/indicators-list.component';
import {EventsComponent} from './events/events.component';
import {EventTabsComponent} from './events/event-tabs/event-tabs.component';
import {EventComponent} from './events/event/event.component';
import {EventTypeComponent} from './events/event-type/event-type.component';
import {RealTimeDataComponent} from './real-time-data/real-time-data.component';
import {ExpensesComponent} from './real-time-data/expenses/expenses.component';
import {VehiclesConditionComponent} from './real-time-data/vehicles-condition/vehicles-condition.component';
import {GoodChartComponent} from './real-time-data/good-chart/good-chart.component';
import {SatisfactoryChartComponent} from './real-time-data/satisfactory-chart/satisfactory-chart.component';
import {CriticalChartComponent} from './real-time-data/critical-chart/critical-chart.component';
import {TrafficJamComponent} from './real-time-data/traffic-jam/traffic-jam.component';
import {AccidentsComponent} from './real-time-data/accidents/accidents.component';
import {WarningsComponent} from './real-time-data/warnings/warnings.component';
import {TripsComponent} from './real-time-data/trips/trips.component';
import {TripsPerfComponent} from './real-time-data/trips-perf/trips-perf.component';
import {ServiceComponent} from './real-time-data/service/service.component';
import {DrivingMeterComponent} from './real-time-data/driving-meter/driving-meter.component';
import {CriticalsComponent} from './real-time-data/criticals/criticals.component';
import {VehiclesOverviewComponent} from './vehicles-overview2/vehicles-overview.component';
import {VehiclesTabsComponent} from './vehicles-overview2/vehicles-tabs/vehicles-tabs.component';
import {TripDetailsComponent} from './vehicles-overview2/trip-details/trip-details.component';
import {ConsumptionComponent} from './vehicles-overview2/consumption/consumption.component';
import {AverageSpeedComponent} from './vehicles-overview2/average-speed/average-speed.component';
import {VehiclePopoverComponent} from './vehicles-overview2/vehicles-tabs/vehicle-popover/vehicle-popover.component';
import {EventsService} from '../@core/mock/common/events.service';
import {VehicleOverviewComponent} from './vehicles-overview2/vehicles-tabs/vehicle/vehicle.component';
import {NbPopoverModule} from '@nebular/theme';
import {VehicleMarkerPopupComponent} from './vehicles-overview2/vehicles-tabs/vehicle-marker-popup/vehicle-marker-popup.component';
import {MapComponent} from '../shared/components/map.component';
import {ConditionIndicatorComponent} from './vehicles-overview2/vehicles-tabs/vehicle-marker-popup/condition-indicator/condition-indicator.component';
import {ErrorsIndicatorComponent} from './vehicles-overview2/vehicles-tabs/vehicle-marker-popup/errors-indicator/errors-indicator.component';
import {TripDetailsService} from './vehicles-overview2/trip-details/trip-details.service';


@NgModule({
  declarations: [
    IndicatorsComponent,
    IndicatorComponent,
    IndicatorsListComponent,
    EventsComponent,
    EventTabsComponent,
    EventComponent,
    EventTypeComponent,
    RealTimeDataComponent,
    ExpensesComponent,
    VehiclesConditionComponent,
    GoodChartComponent,
    SatisfactoryChartComponent,
    CriticalChartComponent,
    TrafficJamComponent,
    AccidentsComponent,
    WarningsComponent,
    TripsComponent,
    TripsPerfComponent,
    ServiceComponent,
    DrivingMeterComponent,
    CriticalsComponent,
    VehiclesOverviewComponent,
    VehiclesTabsComponent,
    VehicleOverviewComponent,
    TripDetailsComponent,
    ConsumptionComponent,
    AverageSpeedComponent,
    VehicleMarkerPopupComponent,
    ConsumptionComponent,
    ConditionIndicatorComponent,
    ErrorsIndicatorComponent,
    VehiclePopoverComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    NbPopoverModule
  ],
  entryComponents: [
    VehiclePopoverComponent,
    VehicleMarkerPopupComponent
  ],
  providers: [
    EventsService,
    TripDetailsService,
    MapComponent
  ]
})
export class DashboardModule { }
