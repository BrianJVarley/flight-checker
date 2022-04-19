import { Routes } from "@angular/router"
import { AirportComponent } from "./airport/airport.component"

export const FLIGHT_BOOKING_ROUTES: Routes = [
  {
    path: 'flight-booking/airport',
    component: AirportComponent,
  },
];