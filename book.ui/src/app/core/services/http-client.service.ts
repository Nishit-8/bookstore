import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../../shared/constant';
import { map, Observable } from 'rxjs';
import { IConfig } from '../../shared/models/config.model';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private http: HttpClient) { }

  loadConfig(): Observable<IConfig> {
    return this.http.get(Constant.configURL).pipe(map(res => res as IConfig));
  }
}
