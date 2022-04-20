import {Component} from '@angular/core';
import { Store } from '@ngrx/store';
import { FlightBookingAppState } from '../flight-booking/+state/flight-booking.reducer';
import { selecFlightsCount } from '../flight-booking/+state/flight-booking.selectors';


@Component({
  selector: 'sidebar-cmp',
  templateUrl: 'sidebar.component.html',
})
export class SidebarComponent {
  flightsCount$ = this.store.select(selecFlightsCount);

  constructor(
    private store: Store<FlightBookingAppState>
  ) {}
}
