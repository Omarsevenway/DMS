import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MqttMessage, MqttService as NgxMqttService } from 'ngx-mqtt';

@Injectable({
  providedIn: 'root'
})
export class MQTTService {
  constructor(private mqttService: NgxMqttService) {}

  public getMessage(): Observable<any> {
    // Replace 'your/topic/here' with your actual topic
    return this.mqttService.observe('Factory/Machine1/Predictions').pipe(
      map((message: MqttMessage) => JSON.parse(message.payload.toString()))
    );
  }
}
