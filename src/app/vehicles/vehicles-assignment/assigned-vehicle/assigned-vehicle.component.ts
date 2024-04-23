import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {Vehicle} from '../../../@core/interfaces/common';
import {NbDialogService} from '@nebular/theme';
import {VehicleAssignmentPopUpComponent} from '../../vehicles-assignment-pop-up/vehicles-assignment-pop-up/vehicle-assignment-pop-up.component';

@Component({
  selector: 'assigned-vehicle',
  templateUrl: './assigned-vehicle.component.html',
  styleUrls: ['./assigned-vehicle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssignedVehicleComponent implements OnInit {

  showDetails = true;

  @Input() vehicle: Vehicle;

  constructor(private dialogService: NbDialogService) { }

  ngOnInit() {
  }

  detailsClick() {
    this.showDetails = !this.showDetails;
  }

  getFullName() {
    return `${this.vehicle.assignedDrivers[0].driver.name} ${this.vehicle.assignedDrivers[0].driver.surname}`;
  }

  private getFormattedDate(date: Date, separator: string) {
    const dd = date.getDate();
    const mm = date.getMonth();
    let formattedDate = dd.toString();
    let formattedMonth = mm.toString();
    if (dd < 10) {
      formattedDate = `0${dd}`;
    }

    if (mm < 10) {
      formattedMonth = `0${mm}`;
    }

    return `${formattedMonth}${separator}${formattedDate}${separator}${date.getFullYear()}`;
  }

  getDatesGap() {
    const startDate = this.vehicle.assignedDrivers[0].startDate;
    const endDate = this.vehicle.assignedDrivers[0].endDate;
    return `${this.getFormattedDate(startDate, '/')} - ${this.getFormattedDate(endDate, '/')}`;
  }

  getImageSource() {
    const vehicleStatus = this.vehicle.status.replace(/\s/g, '');
    return `assets/images/${this.vehicle.type.toLowerCase()}-${vehicleStatus}.png`;
  }

  isDriverExist(): boolean {
    return !!this.vehicle.assignedDrivers;
  }

  openDialog() {
    this.dialogService.open(VehicleAssignmentPopUpComponent);
  }
}
