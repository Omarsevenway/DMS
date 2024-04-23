import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-trip-tabs',
  templateUrl: './trip-tabs.component.html',
  styleUrls: ['./trip-tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TripTabsComponent implements OnInit {

  tripCoords = [
    [38.891033, -77.041626],
    [38.771216, -77.536011],
    [38.950865, -78.305054],
    [38.134557, -79.041138],
    [37.142803, -80.013428],
    [36.527295, -82.320557],
    [35.889050, -84.012451]
  ];

  mapCenter = {
    zoom: 7,
    lat: 37.666429,
    lng: -80.321045
  };

  // data = {
  //   trip: {
  //     travelledPath: this.tripCoords,
  //     upcomingPath: null,
  //   },
  //   markers: null,
  // };

  constructor() {
  }

  ngOnInit() {
  }

}
