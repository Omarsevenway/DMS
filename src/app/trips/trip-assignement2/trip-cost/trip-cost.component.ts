import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-trip-cost',
  templateUrl: './trip-cost.component.html',
  styleUrls: ['./trip-cost.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TripCostComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
