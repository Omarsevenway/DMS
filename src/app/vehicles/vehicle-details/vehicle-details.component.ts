import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehicleDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
