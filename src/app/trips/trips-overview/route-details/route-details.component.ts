import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-route-details',
  templateUrl: './route-details.component.html',
  styleUrls: ['./route-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RouteDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
