import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-idle',
  templateUrl: './idle.component.html',
  styleUrls: ['./idle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IdleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
