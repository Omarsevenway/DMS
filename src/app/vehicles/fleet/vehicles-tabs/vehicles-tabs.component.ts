import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {VehiclesService} from '../../../@core/mock/common/vehicles.service';

@Component({
  selector: 'vehicles-tabs',
  templateUrl: './vehicles-tabs.component.html',
  styleUrls: ['./vehicles-tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehiclesTabsComponent implements OnInit {

  constructor(public vehiclesService: VehiclesService) { }

  ngOnInit() {
  }

}
