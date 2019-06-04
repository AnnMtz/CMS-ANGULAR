import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
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

const APP_ROUTES: Routes = [
 { path: 'login', component: LoginComponent },
 { path: 'dashboard', component: DashboardComponent },
 { path: 'brokrs', component: BrokrsComponent },
 { path: 'propiedades', component: PropiedadesComponent },
 { path: 'apoyo', component: ApoyoComponent },
 { path: 'terceros', component: TercerosComponent },
 { path: 'notificaciones', component: NotificacionesComponent },
 { path: 'info-gobrokr', component: InfoGobrokrComponent },
 { path: 'sos', component: SOSComponent },
 { path: 'juswho', component: JuswhoComponent },
 { path: '**', pathMatch: 'full', redirectTo: 'brokrs' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
