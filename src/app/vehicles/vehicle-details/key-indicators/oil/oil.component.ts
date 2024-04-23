import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'oil-indicator',
  templateUrl: './oil.component.html',
  styleUrls: ['./oil.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OilComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
