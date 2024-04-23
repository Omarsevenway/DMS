import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Vehicle} from '../../../../@core/interfaces/common';

@Component({
  selector: 'tab-header',
  templateUrl: './tab-header.component.html',
  styleUrls: ['./tab-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabHeaderComponent implements OnInit {

  @Input() vehicles: Vehicle[];

  constructor() { }

  ngOnInit() {
  }
}
