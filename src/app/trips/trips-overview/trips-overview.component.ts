import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-trips-overview',
  templateUrl: './trips-overview.component.html',
  styleUrls: ['./trips-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TripsOverviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
