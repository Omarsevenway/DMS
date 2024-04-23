import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  Input, Injector, ComponentFactoryResolver,
} from '@angular/core';
import * as leaflet from 'leaflet';
import { LeafletDirective } from '@asymmetrik/ngx-leaflet';
import { Subject } from 'rxjs';
import ResizeObserver from 'resize-observer-polyfill';
import { debounceTime, takeUntil } from 'rxjs/operators';
import {icon, marker} from 'leaflet';
import {VehicleMarkerPopupComponent} from '../../dashboard/vehicles-overview2/vehicles-tabs/vehicle-marker-popup/vehicle-marker-popup.component';
import {Vehicle} from '../../@core/interfaces/common';

@Component({
  selector: 'app-map',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./map.component.scss'],
  host: { 'class': 'chart' },
  template: `
    <div leaflet
         [leafletOptions]="options"
         [leafletLayers]="layers"
         (leafletMapReady)="mapReady($event)"
         [leafletFitBounds]="fitBounds ? fitBounds : null"
         [leafletFitBoundsOptions]="fitBounds ? fitBoundsOptions : null">
    </div>
  `,
})
export class MapComponent implements OnInit, OnDestroy, AfterViewInit, AfterViewChecked {
  layers = [];
  fitBounds: any;
  fitBoundsOptions = {
    paddingTopLeft: [220, 220],
    paddingBottomRight: [220, 220],
    maxZoom: 6
  };

  @ViewChild(LeafletDirective, { static: false }) map: LeafletDirective;

  @Input()
  set route(route) {
    this.layers.push(leaflet.polyline(route, { color: '#0D8A72' }));
  }

  @Input()
  set data(data) {
    this.fitBounds = data.markers.map((bound) => {
      return {
        lat: bound.lat,
        lng: bound.lng,
      };
    });


    this.layers = [];
    if (data.trip !== null && data.trip.travelledPath !== null) {
      this.layers.push(leaflet.polyline(data.trip.travelledPath, { color: '#0D8A72' }));
    }

    if (data.trip !== null && data.trip.upcomingPath !== null) {
      this.layers.push(leaflet.polyline(data.trip.upcomingPath, { color: '#0D8A72', dashArray: '10, 10', dashOffset: '10'}));
    }

    if (data.markers !== null) {
      data.markers.forEach((mark) => {
        const imageUrl = `assets/images/${mark.type}-${mark.status}-marker.png`;

        const pointMarker = marker([mark.lat, mark.lng], {
          icon: icon({
            iconSize: [44, 56],
            iconAnchor: [22, 56],
            popupAnchor: [0, -50],
            iconUrl: imageUrl,
          })
        });

        pointMarker.bindPopup(() => this.createCustomPopup(mark.vehicle), { autoPanPadding: new leaflet.Point(5, 101) }).openPopup();

        this.layers.push(pointMarker);
      });
    }
  }

  @Input()
  set center(center) {
    this.options.zoom = center.zoom;
    this.options.center = leaflet.latLng({ lat: center.lat, lng: center.lng });
  }

  options = {
    layers: [
      leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
    ],
    zoom: 5,
    center: leaflet.latLng({ lat: 38.991709, lng: -76.886109 }),
    zoomControl: false,
  };

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector
  ) {}

  private resizeObserver: ResizeObserver;
  private resize$ = new Subject<void>();
  private destroyed$ = new Subject<void>();

  private createCustomPopup(vehicle: Vehicle) {

    const factory = this.componentFactoryResolver.resolveComponentFactory(VehicleMarkerPopupComponent);

    const component = factory.create(this.injector);
    component.instance.vehicle = vehicle;
    component.changeDetectorRef.detectChanges();

    return component.location.nativeElement;
  }

  ngOnInit() {
    this.resize$
      .pipe(
        debounceTime(100),
        takeUntil(this.destroyed$),
      )
      .subscribe(() => this.map.getMap().invalidateSize());
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.resizeObserver.disconnect();
    this.resizeObserver = null;
  }

  /**
   * Create resize observer to detect resize current container
   * We use this approach because of OnPush detection strategy
   * and not using `DoCheck` logic
   */
  private createResizeObserver() {
    if (this.resizeObserver) {
      return;
    }

    this.resizeObserver = new ResizeObserver(() => this.resize$.next());
    this.resizeObserver.observe(this.map.getMap().getContainer());
  }

  ngAfterViewInit() {
    this.createResizeObserver();
  }

  ngAfterViewChecked() {
    this.resize$.next();
  }

  mapReady(map: leaflet.Map) {
    map.addControl(leaflet.control.zoom({ position: 'bottomright' }));
  }
}
