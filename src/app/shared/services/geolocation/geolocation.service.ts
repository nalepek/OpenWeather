import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import { Geolocation } from './geolocation';

const DEFAULT_GEOLOCATION_COORDINATES = {
  longitude: 51.5,
  latitude: -0.125,
} as Geolocation;

@Injectable({
  providedIn: 'root',
})
export class GeolocationService {
  location$: BehaviorSubject<Geolocation> = new BehaviorSubject(
    DEFAULT_GEOLOCATION_COORDINATES
  );

  fetchGeolocation$(): Observable<boolean> {
    return new Observable<boolean>(subscriber => {
      if (!navigator || !navigator.geolocation) {
        subscriber.error('no geolocaton');
      }

      this.getCurrentPosition(subscriber);
    });
  }

  private getCurrentPosition(subscriber: Subscriber<boolean>): void {
    navigator.geolocation.getCurrentPosition(
      (location: GeolocationPosition) => {
        this.location$.next(this.mapGeolocationPositionToGeolocation(location));
        subscriber.next(true);
        subscriber.complete();
      },
      error => {
        subscriber.next(false);
        subscriber.complete();
      }
    );
  }

  private mapGeolocationPositionToGeolocation(
    location: GeolocationPosition
  ): Geolocation {
    return {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    } as Geolocation;
  }
}
