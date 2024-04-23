import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'vehicle-status',
  templateUrl: './vehicle-status.component.html',
  styleUrls: ['./vehicle-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehicleStatusComponent implements OnInit {

  @Input() status: string;

  constructor() { }

  ngOnInit() {
  }
}
