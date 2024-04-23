/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import {Observable, of as observableOf} from 'rxjs';
import {Injectable} from '@angular/core';
import {Event, EventStatus} from '../../interfaces/common';

@Injectable()
export class EventsService {
  data: Event[] = [
    {
      status: EventStatus.SUCCESS,
      message: 'Delivered',
      date: new Date(),
      vehicle: 'AB 2515',
    }, {
      status: EventStatus.SUCCESS,
      message: 'Maintenance passed',
      date: new Date(),
      vehicle: 'VB 2516',
    }, {
      status: EventStatus.INFO,
      message: 'Parking',
      date: new Date(),
      vehicle: 'WW 1672',
    }, {
      status: EventStatus.INFO,
      message: 'New trip started',
      date: new Date(),
      vehicle: 'VN 2516',
    }, {
      status: EventStatus.WARNING,
      message: 'High speed',
      date: new Date(),
      vehicle: 'VB 2515',
    }, {
      status: EventStatus.ERROR,
      message: 'Low fuel level',
      date: new Date(),
      vehicle: 'TY 1123',
    }
  ];

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  getRandomEvents(): Event[] {
    const start = this.getRandomInt(this.data.length);
    const end = this.getRandomInt(this.data.length);
    return this.data.slice(2, 4);
  }

  getRandomEvent(): Event {
    const elementValue = this.getRandomInt(this.data.length);
    return this.data[elementValue];
  }

  getEvents(): Event[] {
    return this.data;
  }
}
