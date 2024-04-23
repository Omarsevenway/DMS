import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'consumption',
  templateUrl: './consumption.component.html',
  styleUrls: ['./consumption.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConsumptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
