import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';
import {DriversService} from '../../../@core/mock/common/drivers.service';

@Component({
  selector: 'vehicle-assignment-pop-up',
  templateUrl: './vehicle-assignment-pop-up.component.html',
  styleUrls: ['./vehicle-assignment-pop-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehicleAssignmentPopUpComponent implements OnInit {

  constructor(protected dialogRef: NbDialogRef<any>, public driversService: DriversService) { }


  ngOnInit() {
  }

  action() {
    this.dialogRef.close();
  }

}
