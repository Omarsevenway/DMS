import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-trip-events',
  templateUrl: './trip-events.component.html',
  styleUrls: ['./trip-events.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TripEventsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
