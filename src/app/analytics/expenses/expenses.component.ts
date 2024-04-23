import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-expenses1',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpensesComponent implements OnInit {
  data = {
    'name': 'Expenses',
    'data': [
      {
        'color': '#0c8971',
        'value': 30000,
        'name': 'Maintenance'
      },
      {
        'color': '#35ba7e',
        'value': 30000,
        'name': 'Labour Cost'
      },
      {
        'color': '#acda79',
        'value': 25000,
        'name': 'Fuel'
      },
      {
        'color': '#f5e556',
        'value': 15000,
        'name': 'Other'
      },
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
