import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TopMenuPage } from './top-menu.page';

const routes: Routes = [
  {
    path: '',
    component: TopMenuPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TopMenuPage],
  exports: [TopMenuPage]
})
export class TopMenuPageModule { }
