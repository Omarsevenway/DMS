import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'common-information',
  templateUrl: './common-information.component.html',
  styleUrls: ['./common-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommonInformationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
