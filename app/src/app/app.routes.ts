import { Routes } from '@angular/router';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: AboutComponent },
  { path: 'about', component: AboutComponent },
  { path: '**',    component: NoContentComponent },
];
