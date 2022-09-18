import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, tap } from 'rxjs';
import { Config } from './config';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private config?: Config;

  constructor(private http: HttpClient) {}

  loadConfig(): Promise<any> {
    return lastValueFrom(
      this.http.get('./assets/config.json').pipe(
        tap(config => {
          this.config = config as Config;
        })
      )
    );
  }

  get apiBaseUrl(): string {
    this.checkIfConfigIsLoaded();

    return this.config!.apiBaseUrl;
  }

  get apiKey(): string {
    this.checkIfConfigIsLoaded();

    return this.config!.apiKey;
  }

  get units(): string {
    this.checkIfConfigIsLoaded();

    return this.config!.units;
  }

  get lang(): string {
    this.checkIfConfigIsLoaded();

    return this.config!.lang;
  }

  private checkIfConfigIsLoaded(): void {
    if (!this.config) {
      throw Error('Config file not loaded!');
    }
  }
}
