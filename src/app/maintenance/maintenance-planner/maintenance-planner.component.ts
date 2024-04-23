import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-maintenance-planner',
  templateUrl: './maintenance-planner.component.html',
  styleUrls: ['./maintenance-planner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MaintenancePlannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
