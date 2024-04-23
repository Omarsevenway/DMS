import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {Vehicle} from '../../../../../@core/interfaces/common';

@Component({
  selector: 'errors-indicator',
  templateUrl: './errors-indicator.component.html',
  styleUrls: ['./errors-indicator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorsIndicatorComponent implements OnInit {

  @Input() vehicle: Vehicle;

  get errors(): number {
    let errors = 0;
    if (!this.vehicle.indicators.engine) {
      errors++;
    }
    if (!this.vehicle.indicators.battery) {
      errors++;
    }
    return errors;
  }

  constructor() { }

  ngOnInit() {
  }

}
