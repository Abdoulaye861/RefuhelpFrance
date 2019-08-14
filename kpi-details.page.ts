import { Component, OnInit } from '@angular/core';
import { KpiService } from 'src/services/kpi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Kpi } from 'src/app/home/kpi.model';
import { IndicateurService } from 'src/services/indicateur.service';
import { Indicateur } from 'src/app/indicateur/indicateur.model';


@Component({
  selector: 'app-kpi-details',
  templateUrl: './kpi-details.page.html',
  styleUrls: ['./kpi-details.page.scss'],
})
export class KpiDetailsPage implements OnInit {
  indicateur: Array<Indicateur> = [];
  kpi: Kpi;
  indicateurkpi: Array<Indicateur> = [];
  private id: number;
  private id_kpi: number;
  percentage: number;


  constructor(private kpiService: KpiService,
    private route: ActivatedRoute,
    private router: Router,
    private indicateurService: IndicateurService) {

  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.getIndicateur(this.id);
    //this.getIndicateurById();
    this.kpiService.getKpiById(this.id)
      .subscribe(value => {
        this.kpi = value;
        console.log();
      }, (error) => {
        console.log('Erreur', error);
      })
  }


  computePercentage(indicateur: Indicateur): number {
    const volumeTotal = Number(indicateur.volume_fait) + Number(indicateur.volume_restant);
    if (Number(indicateur.volume_fait) === 0) {
      return 0;
    }
    return Number(indicateur.volume_fait) / volumeTotal;
  }


  displayDone(indicateur: Indicateur): string {
    const volumeTotal = Number(indicateur.volume_fait) + Number(indicateur.volume_restant);
    return indicateur.volume_fait + ' sur ' + volumeTotal;
  }


  getIndicateur(id) {
    this.indicateurService.getIndicateur()
      .subscribe((data) => {
        this.indicateur = data._embedded.indicateur;
        for (let indicat of this.indicateur) {
          if (indicat.id_kpi === id) {
            this.indicateurkpi.push(indicat);
          }
        }
        (error) => {
          console.log("Erreur", error);
        };
      })
  }


  goToHome() {
    this.router.navigate(['/home']);
  }


  // getIndicateurById() {
  //   this.id = this.route.snapshot.params.id;
  //   this.indicateurService.getIndicateurById(this.id)
  //     .subscribe(value => {
  //       this.indicateur = value;
  //     }, (error) => {
  //       console.log(error);
  //     })
  // }



}

