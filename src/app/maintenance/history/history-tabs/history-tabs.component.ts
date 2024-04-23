import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-history-tabs',
  templateUrl: './history-tabs.component.html',
  styleUrls: ['./history-tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryTabsComponent implements OnInit {

  public history = [
    {
      name: 'AB 4567',
      cost: '$600',
      status: 'EN ROUTE',
      tasks: [
        {
          name: 'Oil Change',
          price: 56,
        },
        {
          name: 'Engine Examination',
          price: 105,
        }
      ]
    },
    {
      name: 'TR 2415',
      cost: '$150',
      status: 'EN ROUTE',
      tasks: [
        {
          name: 'Filter Replace',
          price: 150,
        }
      ]
    },
    {
      name: 'VB 4356',
      cost: '$1204',
      status: 'EN ROUTE',
      tasks: [
        {
          name: 'Engine Repair',
          price: 1204,
        }
      ]
    },
    {
      name: 'ZZ 2131',
      cost: '$250',
      status: 'EN ROUTE',
      tasks: [
        {
          name: 'Oil Change',
          price: 100,
        },
        {
          name: 'Filter Replace',
          price: 150,
        }
      ]
    },
    {
      name: 'RG 1235',
      cost: '$250',
      status: 'EN ROUTE',
      tasks: [
        {
          name: 'Oil Change',
          price: 100,
        },
        {
          name: 'Filter Replace',
          price: 150,
        }
      ]
    }
  ];

  public planned = [
    {
      name: 'CR 1565',
      cost: '$105',
      status: 'OUT OF SERVICE',
      tasks: [
        {
          name: 'Engine Examination',
          price: 105,
        }
      ]
    },
    {
      name: 'TG 4568',
      cost: '$300',
      status: 'OUT OF SERVICE',
      tasks: [
        {
          name: 'Oil Change',
          price: 300,
        },
      ]
    },
    {
      name: 'AA 2452',
      cost: '$350',
      status: 'OUT OF SERVICE',
      tasks: [
        {
          name: 'Oil Change',
          price: 100,
        },
        {
          name: 'Filter Replace',
          price: 150,
        }
      ]
    },
    {
      name: 'BV 2346',
      cost: '$350',
      status: 'OUT OF SERVICE',
      tasks: [
        {
          name: 'Oil Change',
          price: 100,
        },
        {
          name: 'Filter Replace',
          price: 150,
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  get allVehicles() {
    return this.history.map(x => x.name).concat(this.planned.map(x => x.name));
  }

}
