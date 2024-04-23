import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {VehiclePopoverComponent} from '../vehicle-popover/vehicle-popover.component';
import {Trip, VehicleTripStatus} from '../../../../@core/interfaces/common';
import {TripDetailsService} from '../../trip-details/trip-details.service';
import {Observable, Subject, Subscriber, Subscription} from 'rxjs';


@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehicleOverviewComponent implements OnDestroy {
  @Input() trip: Trip;

  @Output()
  vehicleClicked: EventEmitter<any> = new EventEmitter();

  @Output()
  tripButtonClicked: EventEmitter<any> = new EventEmitter();

  private unsubscribe$ = new Subject();

  currentTrip$: Observable<any> = this.tripDetailsService.get().takeUntil(this.unsubscribe$);

  popover = VehiclePopoverComponent;

  getImageSource() {
    switch (this.trip.vehicleInTripStatus) {
      case VehicleTripStatus.BROKEN:
        return `assets/images/${this.trip.vehicle.type.toLowerCase()}-outofservice.png`;
      case VehicleTripStatus.PARKED:
        return `assets/images/${this.trip.vehicle.type.toLowerCase()}-available.png`;
      case VehicleTripStatus.DRIVING:
        return `assets/images/${this.trip.vehicle.type.toLowerCase()}-onroute.png`;
    }
  }

  constructor(private tripDetailsService: TripDetailsService) {}

  vehicleClick() {
    this.tripDetailsService.update(this.trip);
    this.vehicleClicked.emit();
  }

  buttonClick(click) {
    click.stopPropagation();
    this.tripDetailsService.update(this.trip);
    this.tripButtonClicked.emit();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
