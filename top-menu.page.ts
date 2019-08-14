import { Component, OnInit } from '@angular/core';
import { KpiService } from 'src/services/kpi.service';
import { Kpi } from '../home/kpi.model';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.page.html',
  styleUrls: ['./top-menu.page.scss'],
})
export class TopMenuPage implements OnInit {

  kpi: Kpi;

  constructor(private kpiService: KpiService) { }

  ngOnInit() {
    this.getKpi();
  }

  getKpi() {
    this.kpiService.getKpi()
      .subscribe((data) => {
        this.kpi = data._embedded.kpi;
        console.log(data),
          (error) => {
            console.log('Erreur!: ' + error);
          }
      }
      )
  }
}
