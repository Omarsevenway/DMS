// Updated component code incorporating MQTT data subscription
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MQTTService } from './mqtt.service';

@Component({
  selector: 'app-real-time-data',
  templateUrl: './real-time-data.component.html',
  styleUrls: ['./real-time-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RealTimeDataComponent implements OnInit {
  probability: number;
  predictionStatus: string;

  constructor(private mqttService: MQTTService) { }

  ngOnInit() {
    this.mqttService.getMessage().subscribe(data => {
      this.probability = data.probability;
      this.predictionStatus = data.predictionStatus;
    });
  }

  get currentDate() {
    return new Date().toLocaleDateString();
  }

  get currentTime() {
    return new Date().toLocaleTimeString();
  }
}
