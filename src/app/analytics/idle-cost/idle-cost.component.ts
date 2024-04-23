import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-idle-cost1',
  templateUrl: './idle-cost.component.html',
  styleUrls: ['./idle-cost.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IdleCostComponent implements OnInit {
  data =   [
    {
      'name': 'Trips with Delay',
      'color': '#feb317',
      'gradientColor': '#f4f2e3',
      'data': [
        [
          'Jan',
          30000
        ],
        [
          'Feb',
          70000
        ],
        [
          'Mar',
          40000
        ],
        [
          'Apr',
          60000
        ],
        [
          'May',
          65000
        ],
        [
          'Jun',
          80000
        ],
        [
          'Jul',
          49000
        ],
        [
          'Aug',
          90000
        ],
        [
          'Sep',
          80000
        ],
        [
          'Oct',
          30000
        ],
        [
          'Nov',
          40000
        ],
        [
          'Dec',
          55000
        ]
      ],
      'type': 'line'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
