import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IndicateurPage } from './indicateur.page';
import { NgCircleProgressModule } from 'ng-circle-progress';

const routes: Routes = [
  {
    path: '',
    component: IndicateurPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgCircleProgressModule,
    RouterModule.forChild(routes),

    NgCircleProgressModule.forRoot({
      // radius: 150,
      // outerStrokeLinecap:"square",
      // outerStrokeWidth: 14,
      // innerStrokeWidth: 8,
      // showSubtitle: false,
      // outerStrokeColor: "#78C000",
      // innerStrokeColor: "#C7E596",
      // animationDuration: 300,

  "radius": 150,
  "space": -12,
  "outerStrokeGradient": false,
  "outerStrokeLinecap": "square",
  "outerStrokeWidth": 12,
  "outerStrokeColor": "#78C000",
  "innerStrokeColor": "C7E596",
  "innerStrokeWidth": 12,
  "animateTitle": false,
  "animationDuration": 250,
  "showUnits": true,
  "clockwise": true,
  "showZeroOuterStroke": true
    })


  ],
  declarations: [IndicateurPage]
})
export class IndicateurPageModule {}
