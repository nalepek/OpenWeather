import { Component, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { CurrentWeatherService } from "./current-weather.service";
import { WeatherApi } from "./weather-api";

@Component({
  selector: "current-weather",
  templateUrl: "./current-weather.view.html",
  styleUrls: ["./current-weather.view.scss"],
})
export class CurrentWeatherView implements OnInit {
  weather$: Observable<WeatherApi> = of({} as WeatherApi);
  constructor(private service: CurrentWeatherService) {}

  ngOnInit(): void {
    this.weather$ = this.service.fetchCurrentWeather$();
    // this.service.fetchCurrentWeather$().subscribe((x) => console.log(x));
  }
}
