import { Injectable } from '@angular/core';
import { IConfig } from '../../shared/models/config.model';
import { HttpClientService } from './http-client.service';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private _config: IConfig = {} as IConfig;

  constructor(private httpClient: HttpClientService) { }

  loadConfig() {
    return firstValueFrom(this.httpClient.loadConfig()).then((config: IConfig) => this._config = config);
  }

  get() {
    return this._config;
  }
}
