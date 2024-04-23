import {Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input} from '@angular/core';
import {Trip, Vehicle} from '../../../@core/interfaces/common';
import {TripDetailsService} from './trip-details.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TripDetailsComponent implements OnInit {

  trip: Observable<Trip> = this.tripDetailsService.get();

  @Output()
  close: EventEmitter<any> = new EventEmitter();

  detailsClose() {
    this.close.emit();
  }

  constructor(private tripDetailsService: TripDetailsService) { }

  ngOnInit() {
  }

}
