import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TripComponent implements OnInit {

  constructor() { }

  tripCoords = [
    [40.683055, -111.825476],
    [40.807519, -111.407743],
    [40.960830, -111.456866],
    [41.247660, -111.062614],
    [41.315487, -110.7201238],
    [41.397952, -110.187286],
    [41.555374, -109.900268],
    [41.527621, -109.414123],
    [41.602629, -109.217742],
  ];

  mapCenter = {
    zoom: 7,
    lat: 41.148630,
    lng: -110.486021
  };

  // data = {
  //   trip:  {
  //     travelledPath: this.tripCoords,
  //     upcomingPath: null,
  //   },
  //   markers: null,
  // };

  ngOnInit() {
  }

}
