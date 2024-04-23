import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbTooltipModule, NbIconModule, NbInputModule, NbButtonModule, NbTabsetModule, NbCardModule, NbListModule, NbCheckboxModule, NbSelectModule, NbDatepickerModule, NbProgressBarModule, NbRadioModule, NbCalendarModule } from '@nebular/theme';
import { MapComponent } from './components/map.component';
import { EchartsDirective } from './directives/echarts.directive';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { DoughnutChartComponent } from './components/doughnut-chart.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { LineChartComponent } from './components/line-chart.component';
import { BarChartComponent } from './components/bar-chart.component';
import { FuelConsumptionComponent } from './components/fuel-consumption/fuel-consumption.component';

@NgModule({
  declarations: [MapComponent, EchartsDirective, DoughnutChartComponent, LineChartComponent, BarChartComponent, FuelConsumptionComponent],
  imports: [
    CommonModule,
    NbTooltipModule,
    NbIconModule,
    NbInputModule,
    NbButtonModule,
    NbTabsetModule,
    LeafletModule,
    NbCardModule,
    NbListModule,
    NbCheckboxModule,
    NbSelectModule,
    NbDatepickerModule,
    NgxEchartsModule,
    NbProgressBarModule,
    NbRadioModule,
    NbCalendarModule
  ],
  exports: [NbTooltipModule, NbIconModule, NbInputModule, NbButtonModule, NbTabsetModule, MapComponent, EchartsDirective, LeafletModule, NbCardModule, NbListModule, NbCheckboxModule, NbSelectModule, NbDatepickerModule, DoughnutChartComponent, NgxEchartsModule, NbProgressBarModule, NbRadioModule, NbCalendarModule, LineChartComponent, BarChartComponent, FuelConsumptionComponent]
})
export class SharedModule { }
