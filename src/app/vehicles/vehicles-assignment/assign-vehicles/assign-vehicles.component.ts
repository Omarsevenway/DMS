import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {VehiclesService} from "../../../@core/mock/common/vehicles.service";

@Component({
  selector: 'app-assign-vehicles',
  templateUrl: './assign-vehicles.component.html',
  styleUrls: ['./assign-vehicles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssignVehiclesComponent implements OnInit {

  constructor(public vehiclesService: VehiclesService) { }

  ngOnInit() {
  }

}
