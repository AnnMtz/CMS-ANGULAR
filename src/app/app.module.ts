import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import {APP_ROUTING} from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AsideComponent } from './components/shared/aside/aside.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrokrsComponent } from './components/brokrs/brokrs.component';
import { PropiedadesComponent } from './components/propiedades/propiedades.component';
import { ApoyoComponent } from './components/apoyo/apoyo.component';
import { TercerosComponent } from './components/terceros/terceros.component';
import { NotificacionesComponent } from './components/notificaciones/notificaciones.component';
import { InfoGobrokrComponent } from './components/info-gobrokr/info-gobrokr.component';
import { SOSComponent } from './components/sos/sos.component';
import { JuswhoComponent } from './components/juswho/juswho.component';
import { BuroComponent } from './components/buro/buro.component';
import { ServicioshipotecariosComponent } from './components/servicioshipotecarios/servicioshipotecarios.component';
import { PolizaComponent } from './components/poliza/poliza.component';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import {HttpClientModule} from '@angular/common/http';








@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AsideComponent,
    HeaderComponent,
    LoginComponent,
    DashboardComponent,
    BrokrsComponent,
    PropiedadesComponent,
    ApoyoComponent,
    TercerosComponent,
    NotificacionesComponent,
    InfoGobrokrComponent,
    SOSComponent,
    JuswhoComponent,
    BuroComponent,
    ServicioshipotecariosComponent,
    PolizaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
