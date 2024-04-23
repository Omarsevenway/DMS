import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as echarts from 'echarts/dist/echarts.js';

@Component({
  selector: 'app-satisfactory-chart',
  templateUrl: './satisfactory-chart.component.html',
  styleUrls: ['./satisfactory-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SatisfactoryChartComponent implements OnInit {

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
        radius: ['75%', '90%'],
        data: [
          {
            value: 27,
            name: ' ',
            label: {
              normal: {
                position: 'center',
                formatter: '{d}%',
                textStyle: {
                  fontSize: '15',
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
                    color: 'rgb(255, 185, 77)',
                  },
                  {
                    offset: 1,
                    color: 'rgb(255, 185, 77)',
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
            value: 73,
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
