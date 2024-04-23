import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'battery-indicator',
  templateUrl: './battery.component.html',
  styleUrls: ['./battery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BatteryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
