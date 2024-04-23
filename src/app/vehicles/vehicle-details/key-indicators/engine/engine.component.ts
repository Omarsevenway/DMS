import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'engine-indicator',
  templateUrl: './engine.component.html',
  styleUrls: ['./engine.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EngineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
