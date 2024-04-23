import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TripsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
