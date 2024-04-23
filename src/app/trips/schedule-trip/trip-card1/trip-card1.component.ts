import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-trip-card1',
  templateUrl: './trip-card1.component.html',
  styleUrls: ['./trip-card1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TripCard1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
