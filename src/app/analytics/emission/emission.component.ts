import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-emission1',
  templateUrl: './emission.component.html',
  styleUrls: ['./emission.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmissionComponent implements OnInit {
  data =   {
    'name': 'Emission',
    'width': 55,
    'data': [
      [
        30000,
        'Jan'
      ],
      [
        85000,
        'Feb'
      ],
      [
        40000,
        'Mar'
      ],
      [
        60000,
        'Apr',
      ],
      [
        65000,
        'May',
      ],
      [
        80000,
        'Jun',
      ],
      [
        49000,
        'Jul',
      ],
      [
        90000,
        'Aug',
      ],
      [
        92000,
        'Sep'
      ],
      [
        30000,
        'Oct',
      ],
      [
        40000,
        'Nov',
      ],
      [
        55000,
        'Dec',
      ]
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
