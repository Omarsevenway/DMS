import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {Trip} from '../../@core/interfaces/common';
import {TripsService} from '../../@core/mock/common/trips.service';
import {Subject} from 'rxjs';
import {TripDetailsService} from './trip-details/trip-details.service';
import 'rxjs-compat/add/operator/takeUntil';

@Component({
  selector: 'app-vehicles-overview',
  templateUrl: './vehicles-overview.component.html',
  styleUrls: ['./vehicles-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehiclesOverviewComponent implements OnDestroy {
  showIndicators = true;

  showDetails = false;
  showList = true;

  currentPositionMarker = {};
  currentRoute = {};

  markers = this.tripsService.getMarkersData();

  data = {
    trip: null,
    markers: this.markers,
  };

  private unsubscribe$ = new Subject();

  constructor(private tripsService: TripsService,
              private tripDetailsService: TripDetailsService) {
  }

  showTrip() {
    this.data = {
      trip: this.currentRoute,
      markers: [this.currentPositionMarker],
    };
  }

  showMarkers() {
    this.data = {
      trip: null,
      markers: this.markers,
    };
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  indicatorsClose() {
    this.showIndicators = false;
  }

  indicatorsShow() {
    this.showIndicators = true;
  }

  handleTripButtonClick() {
    this.showDetails = true;
    this.detailsShow();
  }

  handleVehicleClick() {
    this.showDetails = !this.showDetails;
    if (this.showDetails) {
      this.detailsShow();
    } else {
      this.detailsClose();
    }
  }

  detailsShow() {
    this.tripDetailsService.get().takeUntil(this.unsubscribe$).subscribe((trip: Trip) => {
      if (trip && trip.vehicle) {
        this.currentRoute = {
          travelledPath: trip.travelledPath,
          upcomingPath: trip.upcomingPath,
        };

        this.currentPositionMarker = {
          type: trip.vehicle.type.toString().toLowerCase(),
          status: trip.vehicleInTripStatus,
          lat: trip.currentPosition.lat,
          lng: trip.currentPosition.lng,
          vehicle: trip.vehicle
        };

        this.showTrip();
      }
    });
  }

  detailsClose() {
    this.tripDetailsService.remove();
    this.showDetails = false;
    this.showMarkers();
  }

  listClose() {
    this.detailsClose();
    this.showList = false;
  }

  listShow() {
    this.showList = true;
  }
}
