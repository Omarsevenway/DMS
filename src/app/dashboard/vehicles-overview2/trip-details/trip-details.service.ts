import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';

@Injectable()
export class TripDetailsService {
  constructor() {
  }

  private currentTrip: any = {};
  private tripSubject: BehaviorSubject<any> = new BehaviorSubject(this.currentTrip);

  public get(): Subject<any> {
    return this.tripSubject;
  }

  public update(trip: any): void {
    this.tripSubject.next(trip);
  }

  public remove(): void {
    this.tripSubject.next({});
  }

}
