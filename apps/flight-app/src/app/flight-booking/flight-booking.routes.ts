import { Routes } from '@angular/router';
import { BasketComponent } from '../basket/basket.component';
import { FlightTypeaheadComponent } from '../flight-typeahead/flight-typeahead.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';

// Example generate routes for a module:
// ng generate module [module-name] --routing
export const FLIGHT_BOOKING_ROUTES: Routes = [
  {
    path: 'flight-search',
    component: FlightSearchComponent,
  },
  {
    path: 'passenger-search',
    component: PassengerSearchComponent,
  },
  {
    path: 'flight-edit/:id',
    component: FlightEditComponent,
  },
  {
    path: 'flight-booking/flight-search',
    component: FlightSearchComponent,
  },
  {
    path: 'flight-typeahead',
    component: FlightTypeaheadComponent,
  },
  {
    path: 'basket',
    component: BasketComponent,
    outlet: 'aux',
  },
];
