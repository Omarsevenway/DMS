import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-trip1',
  templateUrl: './trip1.component.html',
  styleUrls: ['./trip1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Trip1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
