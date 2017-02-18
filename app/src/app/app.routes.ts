import { Routes } from '@angular/router';
import { AuthGuard } from './auth-guard';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { AccessComponent } from './access';
import { ClientsComponent } from './clients';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'access', component: AccessComponent },
  { path: 'about', component: AboutComponent },
  { path: 'clients', component: ClientsComponent, canActivate: [AuthGuard] },
  { path: '**',    component: NoContentComponent },
];
