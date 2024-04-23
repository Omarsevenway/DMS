import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'gas-indicator',
  templateUrl: './gas.component.html',
  styleUrls: ['./gas.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
