import {Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input, OnDestroy} from '@angular/core';
import {Trip, Vehicle} from '../../../@core/interfaces/common';
import {TripsService} from '../../../@core/mock/common/trips.service';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'vehicle-tabs',
  templateUrl: './vehicles-tabs.component.html',
  styleUrls: ['./vehicles-tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehiclesTabsComponent {
  drivingVehicles = this.tripsService.getTripsWithDrivingVehicles();

  parkedVehicles = this.tripsService.getTripsWithParkedVehicles();

  allVehicles = this.tripsService.getTrips();

  @Output()
  vehicleClicked: EventEmitter<any> = new EventEmitter();

  @Output()
  tripButtonClicked: EventEmitter<any> = new EventEmitter();

  constructor(private tripsService: TripsService) {}

  handleVehicleClick() {
    this.vehicleClicked.emit();
  }

  handleButtonClick() {
    this.tripButtonClicked.emit();
  }
}
