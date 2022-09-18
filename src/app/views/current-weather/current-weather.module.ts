import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { SharedModule } from "@shared/shared.module";
import { CurrentWeatherView } from "./current-weather.view";

const ROUTES: Route[] = [
  { path: "", component: CurrentWeatherView },
  { path: "**", redirectTo: "" },
];

@NgModule({
  declarations: [CurrentWeatherView],
  imports: [SharedModule, RouterModule.forChild(ROUTES)],
})
export class CurrentWeatherModule {}
