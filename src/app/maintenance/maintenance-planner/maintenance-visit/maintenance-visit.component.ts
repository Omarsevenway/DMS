import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-maintenance-visit',
  templateUrl: './maintenance-visit.component.html',
  styleUrls: ['./maintenance-visit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MaintenanceVisitComponent implements OnInit {

  @Input()
  vehicleName: string;

  @Input()
  workshop: boolean;

  constructor() { }

  ngOnInit() {
  }

}
