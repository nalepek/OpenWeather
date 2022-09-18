import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/core/services/config/config.service';

@Injectable()
export class HttpClientInterceptor implements HttpInterceptor {
  constructor(private configService: ConfigService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.url.includes('api.openweathermap.org')) {
      let suffix = ``;

      if (this.configService.lang) {
        suffix += `&lang=${this.configService.lang}`;
      }

      if (this.configService.units) {
        suffix += `&units=${this.configService.units}`;
      }

      request = request.clone({
        url: `${request.url}&appid=${this.configService.apiKey}${suffix}`,
      });
    }

    return next.handle(request);
  }
}
