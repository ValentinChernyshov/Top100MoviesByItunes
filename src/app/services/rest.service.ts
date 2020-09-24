import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable()
export class RestService {

  private baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  public request(method: string, url: string, body?: any, headers?: any): Observable<any> {
    return this.httpClient.request(method, `${this.baseUrl}${url}`, { body, headers });
  }

  public get(url: string): Observable<any> {
    return this.request('GET', url);
  }

}
