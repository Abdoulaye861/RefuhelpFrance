import { Component, OnInit } from '@angular/core';
import { IndicateurService } from 'src/services/indicateur.service';
import { Indicateur } from './indicateur.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Kpi } from '../home/kpi.model';
import { KpiService } from 'src/services/kpi.service';
import { IndicateurDetailsService } from 'src/services/indicateur-details.service';

@Component({
  selector: 'app-indicateur',
  templateUrl: './indicateur.page.html',
  styleUrls: ['./indicateur.page.scss'],
})
export class IndicateurPage implements OnInit {

  indicateur: Indicateur;
  private id: number;
  kpi: Kpi
  indicateurPercent: number;

  constructor(
    private indicateurDetailsService: IndicateurDetailsService,
    private route: ActivatedRoute,
    private router: Router,
    private kpiService: KpiService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.indicateurDetailsService.getIndicateurDetailsById(this.id)
      .subscribe((indicateur) => {
        this.indicateur = indicateur;
        (error) => {
          console.log("Erreur", error);
        };
      })
  }


  // getKpiById(){
  //   this.id = this.route.snapshot.params.id;
  //   this.kpiService.getKpiById(this.id)
  //     .subscribe(value => {
  //       this.kpi = value;
  //     }, (error) => {
  //       console.log('Erreur', error);
  //     })
  // }

  computePercentage(indicateur: Indicateur): number {
    const volumeTotal = Number(indicateur.volume_fait) + Number(indicateur.volume_restant);
    if (this.indicateurPercent === 0) {
      return 0;
    }
    return Number(indicateur.volume_fait) / volumeTotal;
  }


  displayIndicateur(indicateur: Indicateur): string {
    const volumeTotal = Number(indicateur.volume_fait) + Number(indicateur.volume_restant);
    return indicateur.volume_fait + ' sur ' + volumeTotal;
  }


  goToKpiDetails() {
    this.router.navigate(['/kpi-details/', this.indicateur.id_kpi]);
  }



  // goNext(){
  //   this.route.paramMap.subscribe(params => {
  //     this.id = +params.get('id');
  //     this.indicateurDetailsService.getIndicateurDetailsById(this.id);
  //   // this.indicateurDetailsService.getIndicateurDetailsById(this.id)
  //   // .subscribe((indicateur) => {
  //   //   this.indicateur = indicateur;
  //   //   (error) => {
  //   //     console.log("Erreur", error);
  //   //   };
  //   // })
  //   });
  // }



  goToNext(){
    this.id = this.indicateur.id_kpi; 
    this.router.navigate(['/indicateur/', this.id]);

    // if(this.indicateur.id_kpi < 3){
    //   this.id = this.id + 1
    // } else {
    //   this.id = 1;
    // }

    };
      

    goToPreviews(){
      //this.id = this.indicateur.id_kpi; 
      this.router.navigate(['/indicateur/', this.indicateur.id_kpi]);
    }
      
 
}
