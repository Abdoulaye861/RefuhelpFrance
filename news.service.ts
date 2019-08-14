import { Injectable } from '@angular/core';
import { AppSetting } from 'AppSetting';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private baseUrl = AppSetting.NEWS_ENDPOINT;

  constructor(private httpClient: HttpClient ) { }

  getNews():Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }
}
