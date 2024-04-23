import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'average-speed',
  templateUrl: './average-speed.component.html',
  styleUrls: ['./average-speed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AverageSpeedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
