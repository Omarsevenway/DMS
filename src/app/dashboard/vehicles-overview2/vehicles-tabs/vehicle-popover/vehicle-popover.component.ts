import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {Trip, Vehicle, VehicleConditionStatus, VehicleStatus, VehicleType} from '../../../../@core/interfaces/common';

@Component({
  selector: 'vehicle-popover',
  templateUrl: './vehicle-popover.component.html',
  styleUrls: ['./vehicle-popover.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehiclePopoverComponent implements OnInit {

  vehicle = {
    name: 'CD 4926',
    vin: 'WMWRC33474TC49530',
    model: 'model x',
    color: 'blue',
    year: 2008,
    licensePlate: 'riesacszsfren',
    type: VehicleType.CAR,
    status: VehicleStatus.OUT_OF_SERVICE,
    odometer: 10254,

    condition: {
      overview: 20,
      status: VehicleConditionStatus.CRITICAL
    },

    indicators: {
      engine: false,
      battery: false,
      oil: 40,
      gas: 20,
    },
  };

  get engineAlert() {
    return !this.vehicle.indicators.engine;
  }

  get batteryAlert() {
    return !this.vehicle.indicators.battery;
  }

  get fuelProblem() {
    return this.vehicle.indicators.gas < 40;
  }
  constructor() { }

  ngOnInit() {
  }

}
