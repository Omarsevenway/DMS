import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-warnings',
  templateUrl: './warnings.component.html',
  styleUrls: ['./warnings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WarningsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
