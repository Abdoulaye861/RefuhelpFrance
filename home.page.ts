import { Component, OnInit } from '@angular/core';
import { KpiService } from '../../services/kpi.service';
import { Kpi } from './kpi.model';
import { IndicateurService } from 'src/services/indicateur.service';
import { Indicateur } from '../indicateur/indicateur.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  indicateur: Indicateur[];
  kpi: Kpi;
  private id: number;
  private id_kpi: number;

  constructor(private kpiService: KpiService, private indicateurService: IndicateurService ) { }

  ngOnInit() {
    this.kpiService.getKpi()
    .subscribe((data) => {
      this.kpi = data._embedded.kpi;
      console.log(data),
      (error) => {
        console.log('Erreur!: ' + error);
      }
    }
    )}

};
