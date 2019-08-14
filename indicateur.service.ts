import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSetting } from 'AppSetting';
import { Observable } from 'rxjs';
import { Indicateur } from 'src/app/indicateur/indicateur.model';

@Injectable({
  providedIn: 'root'
})
export class IndicateurService {
  indicateur: Indicateur;
  id: number;

  private baseUrl = AppSetting.INDICATEUR_ENDPOINT;

  constructor(public httpClient: HttpClient) { }

  getIndicateur(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }

  getIndicateurByKpiId(id_kpi: number): Observable<Indicateur[]> {
    return this.httpClient.get<Indicateur[]>(this.baseUrl)
  }


  getIndicateurById(id: number): Observable<Indicateur[]> {
    return this.httpClient.get<Indicateur[]>(this.baseUrl + '/' + id)
  }



}
