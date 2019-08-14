import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePage } from './home/home.page';
import { KpiService } from '../services/kpi.service';
import { HttpClientModule } from '@angular/common/http';
import { NewsPageModule } from './news/news.module';
import { ContactPageModule } from './contact/contact.module';
import { KpiDetailsPageModule } from './kpi/kpi-details/kpi-details.module';
import { TopMenuPageModule } from './top-menu/top-menu.module';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent


  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TopMenuPageModule,
    NewsPageModule,
    ContactPageModule,
    KpiDetailsPageModule,
    IonicModule.forRoot()
  ],
  
  providers: [
    StatusBar,
    SplashScreen,
    KpiService,

    { provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
