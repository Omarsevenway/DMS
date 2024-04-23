import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-fuel-cost1',
  templateUrl: './fuel-cost.component.html',
  styleUrls: ['./fuel-cost.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FuelCostComponent implements OnInit {
  data =   [
    {
      "name": "Trips without Fail",
      "color": '#47aa98',
      "gradientColor": "#e8f4f1",
      "data": [
        [
          "Jan",
          30000
        ],
        [
          "Feb",
          110000
        ],
        [
          "Mar",
          60000
        ],
        [
          "Apr",
          80000
        ],
        [
          "May",
          70000
        ],
        [
          "Jun",
          90000
        ],
        [
          "Jul",
          85000
        ],
        [
          "Aug",
          100000
        ],
        [
          "Sep",
          115000
        ],
        [
          "Oct",
          40000
        ],
        [
          "Nov",
          45000
        ],
        [
          "Dec",
          70000
        ]
      ],
      "type": "line"
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
