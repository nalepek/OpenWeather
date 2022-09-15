import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom, tap } from "rxjs";
import { Config } from "./config";

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    private config?: Config;

    constructor(private http: HttpClient) {
    }

    loadConfig(): Promise<any> {
        return lastValueFrom(this.http.get('./assets/config.json').pipe(
            tap((config) => {
                this.config = config as Config;
            })
        ))
    }

    getApiBaseUrl(): string {
        this.checkIfConfigIsLoaded();

        return this.config!.apiBaseUrl;
    }

    getApiKey(): string {
        this.checkIfConfigIsLoaded();

        return this.config!.apiKey;
    }

    private checkIfConfigIsLoaded(): void {
        if (!this.config) {
            throw Error('Config file not loaded!');
        }
    }
}