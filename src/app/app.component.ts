import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, shareReplay } from 'rxjs/operators';
import { BkLayout } from '@uibakery/kit';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

  defaultLayout: BkLayout = {
    paddings: {
      paddingTop: 0,
      paddingRight: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingTopUnit: 'px',
      paddingRightUnit: 'px',
      paddingBottomUnit: 'px',
      paddingLeftUnit: 'px'
    },
    header: true,
    sidebar: true
  };

  layout$: Observable<BkLayout> = this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let route = this.router.routerState.root;
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route.snapshot.data['layout'] || this.defaultLayout;
      }),
      shareReplay(),
    );

  padding$: Observable<string> = this.layout$
    .pipe(
      map((layout: BkLayout) => this.getPaddingCssValue(layout.paddings)),
    );
  items =   [
    {
      'title': 'Dashboard',
      'link': '/overview',
      'icon': 'book-open',
      'children': [
        {
          'title': 'Vehicles Overview',
          'link': '/overview/vehicles-overview',
          'children': null
        },
        {
          'title': 'Real Time Data',
          'link': '/overview/real-time-data',
          'children': null
        },
        {
          'title': 'Events',
          'link': '/overview/events',
          'children': null
        },
      ]
    },
    {
      'title': 'Vehicles',
      'link': '/vehicles',
      'icon': 'car',
      'children': [
        {
          'title': 'Fleet',
          'link': '/vehicles/vehicles-list',
          'children': null
        },
        {
          'title': 'Vehicles Assignment',
          'link': '/vehicles/vehicles-assignment',
          'children': null
        },
        {
          'title': 'Vehicle Details',
          'link': '/vehicles/vehicle-details',
          'children': null
        },
      ]
    },
    {
      'title': 'Trips',
      'link': '/trips',
      'icon': 'map',
      'children': [
        {
          'title': 'Overview',
          'link': '/trips/trips-overview',
          'children': null
        },
        {
          'title': 'Upcoming Trip',
          'link': '/trips/schedule-trip',
          'children': null
        },
        {
          'title': 'Schedule Trip',
          'link': '/trips/trip-assignment',
          'children': null
        },
      ]
    },
    {
      'title': 'Maintenance',
      'link': '/maintenance',
      'icon': 'settings-2',
      'children': [
        {
          'title': 'Maintenance Planner',
          'link': '/maintenance/maintenance-planner',
          'children': null
        },
        {
          'title': 'History',
          'link': '/maintenance/history',
          'children': null
        }
      ]
    },
    {
      'title': 'Analytics',
      'link': '/analytics',
      'icon': 'pie-chart',
      'children': null
    }
  ];

  constructor(private router: Router, private sidebarService: NbSidebarService) {
  }

  toggleSidebar() {
    this.sidebarService.toggle(true);
  }

  private getPaddingCssValue(paddings): string {
    return `${paddings.paddingTop}${paddings.paddingTopUnit} ` +
           `${paddings.paddingRight}${paddings.paddingRightUnit} ` +
           `${paddings.paddingBottom}${paddings.paddingBottomUnit} ` +
           `${paddings.paddingLeft}${paddings.paddingLeftUnit}`;
  }
}
