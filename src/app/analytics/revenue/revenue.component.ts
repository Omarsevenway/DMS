import {Component, OnInit, ChangeDetectionStrategy, AfterViewInit} from '@angular/core';
import * as echarts from 'echarts/dist/echarts.js';

@Component({
  selector: 'app-revenue1',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RevenueComponent {

  data = [
    {
      'name': 'Income',
      'color': '#979797',
      'gradientColor': '#ffffff',
      'data': [
        [
          'Jan',
          60000
        ],
        [
          'Feb',
          75000
        ],
        [
          'Mar',
          120000
        ],
        [
          'Apr',
          60000
        ],
        [
          'May',
          85000
        ],
        [
          'Jun',
          70000
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
      'name': 'Outcome',
      'color': '#148d75',
      'gradientColor': '#cee7e2',
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
  ];
}
