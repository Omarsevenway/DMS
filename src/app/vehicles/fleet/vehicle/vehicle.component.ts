import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {Vehicle} from '../../../@core/interfaces/common';
import {Router} from "@angular/router";

@Component({
  selector: 'vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehicleComponent implements OnInit {
  engine: boolean;
  battery: boolean;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.engine = this.vehicle.indicators.engine;
    this.battery = this.vehicle.indicators.battery;
  }

  @Input() vehicle: Vehicle;

  getImageSource() {
    const vehicleStatus = this.vehicle.status.replace(/\s/g, '');
    return `assets/images/${this.vehicle.type.toLowerCase()}-${vehicleStatus}.png`;
  }

  getStatus(value: number) {
    let status;
    if (value < 33) {
      status = 'danger';
    }
    if (value > 33 && value < 66) {
      status = 'warning';
    }
    if (value > 66) {
      status = 'success';
    }
    return status;
  }

  redirectToDetails() {
    this.router.navigate(['/Vehicles/Vehicle-Details']);
  }
}
