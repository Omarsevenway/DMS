import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-vehicles-condition',
  templateUrl: './vehicles-condition.component.html',
  styleUrls: ['./vehicles-condition.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehiclesConditionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
