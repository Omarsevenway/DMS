import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-indicators-list',
  templateUrl: './indicators-list.component.html',
  styleUrls: ['./indicators-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndicatorsListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
