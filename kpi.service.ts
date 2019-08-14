import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSetting } from 'AppSetting';
import { Observable, from } from 'rxjs';
import { Kpi } from '../app/home/kpi.model'

@Injectable({
  providedIn: 'root'
})


export class KpiService {
  kpi: Kpi;

  private baseUrl = AppSetting.API_ENDPOINT;

  constructor( public httpClient: HttpClient) {}


  getKpi(): Observable<any>{
    return this.httpClient.get(this.baseUrl)
  }


  getKpiById(id: number): Observable<Kpi> {
    return this.httpClient.get<Kpi>(this.baseUrl + '/' + id )
  }

  

  
}
