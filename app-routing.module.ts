import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'contact',
    loadChildren: './contact/contact.module#ContactPageModule'
  },
  {
    path: 'indicateur/:id',
    loadChildren: './indicateur/indicateur.module#IndicateurPageModule'
  },
  {
    path: 'kpi',
    loadChildren: './kpi/kpi.module#KpiPageModule'
  },
  {
    path: 'news',
    loadChildren: './news/news.module#NewsPageModule'
  },
  { path: 'kpi-details/:id',
   loadChildren: './kpi/kpi-details/kpi-details.module#KpiDetailsPageModule' 
  },
  { path: 'top-menu', 
  loadChildren: './top-menu/top-menu.module#TopMenuPageModule'
 }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
