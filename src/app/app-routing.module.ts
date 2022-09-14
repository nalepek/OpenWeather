import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./views/current-weather/current-weather.module').then((m) => m.CurrentWeatherModule)
  },
  {
    path: 'forecast',
    pathMatch: 'full',
    loadChildren: () => import('./views/forecast-weather/forecast-weather.module').then((m) => m.ForecastWeatherModule)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
