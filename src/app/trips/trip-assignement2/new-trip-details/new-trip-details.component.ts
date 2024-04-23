import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-new-trip-details',
  templateUrl: './new-trip-details.component.html',
  styleUrls: ['./new-trip-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewTripDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
