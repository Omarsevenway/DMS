import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'overdue',
  templateUrl: './overdue.component.html',
  styleUrls: ['./overdue.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverdueComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
