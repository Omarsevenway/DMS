import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-schedule-trip',
  templateUrl: './schedule-trip.component.html',
  styleUrls: ['./schedule-trip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleTripComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
