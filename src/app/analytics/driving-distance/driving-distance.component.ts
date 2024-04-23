import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-driving-distance1',
  templateUrl: './driving-distance.component.html',
  styleUrls: ['./driving-distance.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrivingDistanceComponent implements OnInit {
  data =   {
    'name': 'Score',
    'width': 40,
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
        68000
      ],
      [
        'Jun',
        65000
      ],
      [
        'Jul',
        40000
      ],
      [
        'Aug',
        90000
      ],
      [
        'Sep',
        92000
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
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
