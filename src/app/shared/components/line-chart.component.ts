import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit,} from '@angular/core';
import {NbThemeService} from '@nebular/theme';
import {NbJSThemeOptions} from '@nebular/theme/services/js-themes/theme.options';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import SeriesLine = echarts.EChartOption.SeriesLine;
import * as echarts from 'echarts/dist/echarts.js';


@Component({
  selector: 'app-line-chart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {'class': 'chart'},
  template: `
      <div echarts [options]="options"></div>
  `,
})
export class LineChartComponent implements OnInit, OnDestroy {

  @Input() set data(data: SeriesLine[]) {
    if (data) {
      this._data = this.chartDataMapper(data);
      this.updateOptions();
    }
  }

  options: any = {};

  private _data: SeriesLine[];
  private colorConfig: any = {};
  private destroyed$: Subject<void> = new Subject();

  constructor(
    private theme: NbThemeService,
    private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.theme.getJsTheme()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((config: NbJSThemeOptions) => {
        this.colorConfig = config.variables.charts;
        this.updateOptions();
      });
  }

  ngOnDestroy() {
    this.destroyed$.next();
  }

  private updateOptions() {

    if (!this._data) {
      return;
    }

    this.options = {
      backgroundColor: this.colorConfig.bg,
      tooltip: {
        trigger: 'item',
        axisPointer: {
          type: 'line',
          lineStyle: {
            color: 'rgba(44, 46, 47, 0)',
            width: 1,
          },
        },
        position: 'top',
        borderWidth: 1,
        formatter: '{a} <br/>{b} : {c}',
        extraCssText: 'border-radius: 10px; padding: 4px 16px;',
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        axisTick: {
          alignWithLabel: true,
        },
        axisLine: {
          lineStyle: {
            color: this.colorConfig.axisLineColor,
          },
        },
        axisLabel: {
          textStyle: {
            color: this.colorConfig.textColor,
          },
        },
      },
      yAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: this.colorConfig.axisLineColor,
          },
        },
        splitLine: {
          lineStyle: {
            color: this.colorConfig.splitLineColor,
          },
        },
        axisLabel: {
          textStyle: {
            color: this.colorConfig.textColor,
          },
        },
      },
      grid: {
        top: '8%',
        left: 10,
        right: 20,
        bottom: '4%',
        containLabel: true,
      },
      series: this._data,
    };

    this.cd.markForCheck();
  }

  private chartDataMapper(data: SeriesLine[]): SeriesLine[] {
    // borderWidth: 3,
      // borderColor: 'yellow',
      // color: 'blue'
    return data.map(item => {
      item.itemStyle = {
        normal: {
          opacity: 0,
        },
        emphasis: {
          color: '#ffffff',
          borderColor: '#847774',
          borderWidth: 2,
          opacity: 1,
        },
      };
      item.type = 'line';
      item.symbolSize = 10;
        item.lineStyle = {
        color: item.color,
          width: 3
      };
      item.areaStyle = {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: item.gradientColor
        }, {
          offset: 1,
          color: '#fefefd'
        }])
      };
      item.smooth = true;
      return item;
    });
  }
}
