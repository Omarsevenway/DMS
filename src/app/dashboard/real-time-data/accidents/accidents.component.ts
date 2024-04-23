import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-accidents',
  templateUrl: './accidents.component.html',
  styleUrls: ['./accidents.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccidentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
