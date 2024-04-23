import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {Vehicle, VehicleConditionStatus} from '../../../../../@core/interfaces/common';

@Component({
  selector: 'condition-indicator',
  templateUrl: './condition-indicator.component.html',
  styleUrls: ['./condition-indicator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConditionIndicatorComponent implements OnInit {
  @Input() vehicle: Vehicle;
  constructor() { }

  isCritical(): boolean {
    return this.vehicle.condition.status === VehicleConditionStatus.CRITICAL;
  }

  isGood(): boolean {
    return this.vehicle.condition.status === VehicleConditionStatus.GOOD;
  }

  isSatisfactory(): boolean {
    return this.vehicle.condition.status === VehicleConditionStatus.SATISFACTORY;
  }

  ngOnInit() {
  }

}
