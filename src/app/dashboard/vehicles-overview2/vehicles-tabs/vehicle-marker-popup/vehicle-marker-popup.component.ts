import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {Trip, Vehicle} from '../../../../@core/interfaces/common';

@Component({
  selector: 'vehicle-marker-popup',
  templateUrl: './vehicle-marker-popup.component.html',
  styleUrls: ['./vehicle-marker-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehicleMarkerPopupComponent implements OnInit {
  @Input() vehicle: Vehicle;

  get engineAlert(): boolean {
    return !this.vehicle.indicators.engine;
  }

  get batteryAlert(): boolean {
    return !this.vehicle.indicators.battery;
  }

  get fuelProblem(): boolean {
    return this.vehicle.indicators.gas < 80;
  }

  constructor() { }

  ngOnInit() {
  }

}
