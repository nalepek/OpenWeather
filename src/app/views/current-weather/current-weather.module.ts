import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { CurrentWeatherView } from "./current-weather.view";

const ROUTES: Route[] = [
  { path: '', component: CurrentWeatherView },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    CurrentWeatherView
  ],
  imports: [
    RouterModule.forChild(ROUTES)
  ]
})
export class CurrentWeatherModule { }
