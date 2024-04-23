import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Vehicle} from '../../../../@core/interfaces/common';

@Component({
  selector: 'assigned-vehicles-header',
  templateUrl: './assigned-vehicles-header.component.html',
  styleUrls: ['./assigned-vehicles-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssignedVehiclesHeaderComponent {

  @Input() vehicles: Vehicle[];

  constructor() { }

}
