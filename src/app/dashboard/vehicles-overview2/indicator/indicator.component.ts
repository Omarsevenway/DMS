import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndicatorComponent implements OnInit {

  @Input()
  critical: boolean;

  @Input()
  label: string;

  @Input()
  val: number;

  constructor() { }

  ngOnInit() {
  }

}
