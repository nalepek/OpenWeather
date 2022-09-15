import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { ForecastWeatherView } from "./forecast-weather.view";

const ROUTES: Route[] = [
  { path: '', component: ForecastWeatherView },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    ForecastWeatherView
  ],
  imports: [
    RouterModule.forChild(ROUTES)
  ]
})
export class ForecastWeatherModule { }
