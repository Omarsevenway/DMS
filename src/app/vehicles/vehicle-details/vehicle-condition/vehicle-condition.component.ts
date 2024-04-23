import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as echarts from 'echarts/dist/echarts.js';



@Component({
  selector: 'vehicle-condition',
  templateUrl: './vehicle-condition.component.html',
  styleUrls: ['./vehicle-condition.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehicleConditionComponent implements OnInit {

  constructor() { }
  data =   {
    'name': 'Expenses',
    'data': [
      {
        'value': 30,
        'name': 'Maintenance'
      },
      {
        'value': 30,
        'name': 'Labour Cost'
      },
      {
        'value': 25,
        'name': 'Fuel'
      },
      {
        'value': 15,
        'name': 'Other'
      },
    ]
  };

  echartsIntance: any;

  options: any = Object.assign({}, {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    series: [
      {
        name: ' ',
        clockWise: true,
        hoverAnimation: false,
        type: 'pie',
        center: ['45%', '50%'],
        radius: ['75%', '90%'],
        data: [
          {
            value: 70,
            name: ' ',
            label: {
              normal: {
                position: 'center',
                formatter: '{d}%',
                textStyle: {
                  fontSize: '22',
                  fontWeight: '600',
                  color: 'rgb(51, 55, 61)'
                },
              },
            },
            tooltip: {
              show: false,
            },
            itemStyle: {
              normal: {
                color: 'rgb(55, 188, 127)',
              },
            },
            hoverAnimation: false,
          },
          {
            value: 30,
            name: ' ',
            tooltip: {
              show: false,
            },
            label: {
              normal: {
                position: 'inner',
              },
            },
            itemStyle: {
              normal: {
                color: 'rgb(237, 239, 242)',
              },
            },
            hoverAnimation: false,
          },
        ],
      },
    ],
  });

  onChartInit(charts) {
    this.echartsIntance = charts;
  }

  ngOnInit() {
  }

}
