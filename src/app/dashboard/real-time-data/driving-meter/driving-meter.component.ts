import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as echarts from 'echarts/dist/echarts.js';

@Component({
  selector: 'app-driving-meter',
  templateUrl: './driving-meter.component.html',
  styleUrls: ['./driving-meter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrivingMeterComponent implements OnInit {
  
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
        center: ['50%', '50%'],
        radius: ['60%', '70%'],
        data: [
          {
            value: 78,
            name: ' ',
            label: {
              normal: {
                position: 'center',
                formatter: '{d}%',
                textStyle: {
                  fontSize: '22',
                  fontWeight: '600',
                },
              },
            },
            tooltip: {
              show: false,
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: 'rgb(55, 188, 127)',
                  },
                  {
                    offset: 1,
                    color: 'rgb(55, 188, 127)',
                  },
                ]),
                shadowColor: 'rgba(0, 0, 0, 0)',
                shadowBlur: 0,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
              },
            },
            hoverAnimation: false,
          },
          {
            value: 22,
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
                color: 'rgba(143, 155, 179, 0.2)',
              },
            },
          },
        ],
      },
    ],
  });

  constructor() { }

  ngOnInit() {
  }

  onChartInit(charts) {
    this.echartsIntance = charts;
  }

}
