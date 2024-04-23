import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { NbJSThemeOptions } from '@nebular/theme/services/js-themes/theme.options';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import SeriesPie = echarts.EChartOption.SeriesPie;
import {element} from "protractor";

@Component({
  selector: 'app-doughnut-chart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'chart' },
  template: `
      <div echarts [options]="options"></div>
  `,
})
export class DoughnutChartComponent implements OnInit, OnDestroy {

  @Input() set data(data: SeriesPie) {
    this._data = data;
    this.updateOptions();
  }

  options: any = {};

  private _data: SeriesPie = {};
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

  extractColors() {
    const colorsArray = [];
    // @ts-ignore
    this._data.data.map((el) => {
      colorsArray.push(el.color);
    });

    return colorsArray;
  }

  private updateOptions() {
    this.options = {
      backgroundColor: this.colorConfig.bg,
      color: this.extractColors(),
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
      },
      legend: false,
      series: [
        {
          name: this._data.name,
          clockWise: true,
          hoverAnimation: false,
          type: 'pie',
          center: ['50%', '50%'],
          radius: ['75%', '90%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center',
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '25',
                fontWeight: 'bold',
              },
            },
          },
          data: this._data.data,
        },
      ],
      responsiveConfig: {
        500: customOptions,
        default: defaultOptions,
      },
    };

    this.cd.markForCheck();
  }
}

// Options to be set on width > `responsiveConfig.[breakpoint]`
const defaultOptions = {
  series: [{
    center: ['50%', '50%'],
  }],
};

// Options to be set on width < `responsiveConfig.[clientWidth]`
const customOptions = {
  series: [{
    center: ['50%', '45%'],
  }],
};
