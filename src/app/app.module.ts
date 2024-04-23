import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
// Nebular Modules
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbMenuModule, NbIconModule, NbButtonModule, NbDatepickerModule, NbDialogModule } from '@nebular/theme';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { LIGHT_THEME } from './theme';
// MQTT Modules
import { MqttModule, MqttServiceOptions } from 'ngx-mqtt';
// Component Imports
import { AppComponent } from './app.component';
import { CommonMockModule } from './@core/mock/common/common-mock.module';
export const MQTT_SERVICE_OPTIONS: MqttServiceOptions = {
  hostname: 'test.mosquitto.org',
  port: 1883, // Adjust if your broker uses a different port
  path: '/mqtt'
};

const mediaBreakpoints = [
  { name: 'xs', width: 0 },
  { name: 'sm', width: 320 },
  { name: 'md', width: 480 },
  { name: 'lg', width: 768 },
  { name: 'xl', width: 1024 },
];

export const NB_CORE_PROVIDERS = [
  ...CommonMockModule.forRoot().providers,
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    NbThemeModule.forRoot({ name: 'light' }, [LIGHT_THEME], mediaBreakpoints),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbIconModule,
    SharedModule,
    AppRoutingModule,
    NbButtonModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS) // Added MQTT Module
  ],
  providers: [...NB_CORE_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
