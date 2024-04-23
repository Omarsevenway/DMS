import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as echarts from 'echarts/dist/echarts.js';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpensesComponent implements OnInit {

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
        center: '50%',
        radius: '65%',
        tooltip: {
          show: false,
        },
        label: {
          show: false,
        },
        data: [
          {
            value: 134,
            name: 'En Route',
            itemStyle: {
              normal: {
                color: 'rgb(13, 138, 114)',
              },
            },
          },
          {
            value: 45,
            name: 'Available',
            itemStyle: {
              normal: {
                color: 'rgb(55, 188, 127)',
              },
            },
          },
          {
            value: 15,
            name: 'Out Of Service',
            itemStyle: {
              normal: {
                color: 'rgb(255, 185, 77)',
              },
            },
          },
        ],
        emphasis: {
          itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
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
