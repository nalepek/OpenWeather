import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ConfigService } from "@core/index";
import { GeolocationService, Geolocation } from "@shared/index";
import { map, Observable, switchMap } from "rxjs";
import { WeatherApi } from "./weather-api";

@Injectable({
  providedIn: "root",
})
export class CurrentWeatherService {
  constructor(
    private http: HttpClient,
    private configService: ConfigService,
    private geolocationService: GeolocationService
  ) {}

  fetchCurrentWeather$(): Observable<WeatherApi> {
    return this.geolocationService.location$.pipe(
      map((geolocation: Geolocation) => {
        return this.getGeolocationUrl(geolocation);
      }),
      switchMap((url: string) => {
        return this.http.get<WeatherApi>(url);
      })
    );
  }

  private getGeolocationUrl(geolocation: Geolocation) {
    let url = this.getBaseUrl();

    let lat = `lat=${geolocation.latitude}`;
    let lon = `lon=${geolocation.longitude}`;

    return (url += `${lat}&${lon}`);
  }

  private getBaseUrl() {
    return `${this.configService.apiBaseUrl}/weather?`;
  }
}
