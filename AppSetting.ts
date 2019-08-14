import { HttpHeaders } from '@angular/common/http';

export class AppSetting {
    public static API_ENDPOINT =        "http://services.dev.echonet/kpi"
    public static NEWS_ENDPOINT =       "http://services.dev.echonet/news"
    public static INDICATEUR_ENDPOINT = "http://services.dev.echonet/indicateur"

    
     httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
    };
}