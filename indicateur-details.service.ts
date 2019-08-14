import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Indicateur } from 'src/app/indicateur/indicateur.model';
import { Observable } from 'rxjs';
import { AppSetting } from 'AppSetting';

@Injectable({
  providedIn: 'root'
})
export class IndicateurDetailsService {
  indicateur: Indicateur;

  private baseUrl = AppSetting.INDICATEUR_ENDPOINT;

  constructor(public httpClient: HttpClient) { }


  getIndicateurDetailsById(id: number): Observable<Indicateur> {
    return this.httpClient.get<Indicateur>(this.baseUrl + '/' + id)
  }
  
}
