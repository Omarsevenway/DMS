import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-indicators',
  templateUrl: './indicators.component.html',
  styleUrls: ['./indicators.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndicatorsComponent implements OnInit {

  @Output()
  settingsClicked: EventEmitter<any> = new EventEmitter();

  @Output()
  listClicked: EventEmitter<any> = new EventEmitter();

  @Input()
  indicatorsButtonVisible;

  @Input()
  vehiclesButtonVisible;

  constructor() { }

  ngOnInit() {
  }

  listClick() {
    this.listClicked.emit();
  }

  settingsClick() {
    this.settingsClicked.emit();
  }

}
