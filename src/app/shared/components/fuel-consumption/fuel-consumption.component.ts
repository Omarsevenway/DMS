import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'fuel-consumption',
  templateUrl: './fuel-consumption.component.html',
  styleUrls: ['./fuel-consumption.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FuelConsumptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
