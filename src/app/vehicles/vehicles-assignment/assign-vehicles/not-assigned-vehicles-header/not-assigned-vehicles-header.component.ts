import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Vehicle} from '../../../../@core/interfaces/common';
import { NbDialogService} from '@nebular/theme';
import {VehicleAssignmentPopUpComponent} from "../../../vehicles-assignment-pop-up/vehicles-assignment-pop-up/vehicle-assignment-pop-up.component";

@Component({
  selector: 'not-assigned-vehicles-header',
  templateUrl: './not-assigned-vehicles-header.component.html',
  styleUrls: ['./not-assigned-vehicles-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotAssignedVehiclesHeaderComponent {

  @Input() vehicles: Vehicle[];

  constructor(private dialogService: NbDialogService) { }

  openDialog() {
    this.dialogService.open(VehicleAssignmentPopUpComponent);
  }

}
