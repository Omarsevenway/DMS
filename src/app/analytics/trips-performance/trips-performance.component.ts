import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-trips-performance1',
  templateUrl: './trips-performance.component.html',
  styleUrls: ['./trips-performance.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TripsPerformanceComponent implements OnInit {
  data =   [
    {
      'name': 'Trips without Fail',
      'color': '#148d75',
      'gradientColor': '#e8f4f1',
      'data': [
        [
          'Jan',
          30000
        ],
        [
          'Feb',
          110000
        ],
        [
          'Mar',
          60000
        ],
        [
          'Apr',
          80000
        ],
        [
          'May',
          70000
        ],
        [
          'Jun',
          90000
        ],
        [
          'Jul',
          85000
        ],
        [
          'Aug',
          100000
        ],
        [
          'Sep',
          115000
        ],
        [
          'Oct',
          40000
        ],
        [
          'Nov',
          45000
        ],
        [
          'Dec',
          70000
        ]
      ],
      'type': 'line'
    },
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
          85000
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
          100000
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
    {
      'name': 'Failed Trips',
      'color': '#eb5943',
      'gradientColor': '#fce9e3',
      'data': [
        [
          'Jan',
          10000
        ],
        [
          'Feb',
          50000
        ],
        [
          'Mar',
          30000
        ],
        [
          'Apr',
          32000
        ],
        [
          'May',
          40000
        ],
        [
          'Jun',
          80000
        ],
        [
          'Jul',
          25000
        ],
        [
          'Aug',
          60000
        ],
        [
          'Sep',
          25000
        ],
        [
          'Oct',
          20000
        ],
        [
          'Nov',
          30000
        ],
        [
          'Dec',
          35000
        ]
      ],
      'type': 'line'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
