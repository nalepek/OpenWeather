import { Component } from '@angular/core';
import { GeolocationService } from '@shared/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private geolocationService: GeolocationService) {
    this.geolocationService.fetchGeolocation$().subscribe();
  }

  title = 'open-weather';
}
