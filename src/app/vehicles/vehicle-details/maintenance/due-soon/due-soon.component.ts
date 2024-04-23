import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'due-soon',
  templateUrl: './due-soon.component.html',
  styleUrls: ['./due-soon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DueSoonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
