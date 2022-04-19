import { ExtraOptions, Routes } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { FLIGHT_BOOKING_ROUTES } from './flight-booking/flight-booking.routes';
import { FlightSearchComponent } from './flight-booking/flight-search/flight-search.component';
import { FlightTypeaheadComponent } from './flight-typeahead/flight-typeahead.component';
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
    path: 'flight-booking/flight-search',
    component: FlightSearchComponent,
  },
  {
    path: 'flight-typeahead',
    component: FlightTypeaheadComponent,
  },
  ...FLIGHT_BOOKING_ROUTES,
  {
    path: 'basket',
    component: BasketComponent,
    outlet: 'aux',
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
