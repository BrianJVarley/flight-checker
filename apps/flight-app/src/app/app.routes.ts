import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'passenger',
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'search',
        loadChildren: () =>
          import('@flight-workspace/passenger/feature-search').then(
            (esm) => esm.PassengerFeatureSearchModule
          ),
      },
      {
        path: 'edit/:includes',
        loadChildren: () =>
          import('@flight-workspace/passenger/feature-edit').then(
            (esm) => esm.PassengerFeatureEditModule
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
