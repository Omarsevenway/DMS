import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-traffic-jam',
  templateUrl: './traffic-jam.component.html',
  styleUrls: ['./traffic-jam.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrafficJamComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
