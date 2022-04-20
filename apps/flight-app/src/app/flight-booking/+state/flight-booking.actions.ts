import { Flight } from '@flight-workspace/flight-lib';
import { createAction, props } from '@ngrx/store';

export const loadFlightBookings = createAction(
  '[FlightBooking] Load FlightBookings'
);

export const loadFlightBookingsSuccess = createAction(
  '[FlightBooking] Load FlightBookings Success',
  props<{ data: any }>()
);

export const loadFlightBookingsFailure = createAction(
  '[FlightBooking] Load FlightBookings Failure',
  props<{ error: any }>()
);


export const flightsLoaded = createAction(
  '[FlightBooking] FlightsLoaded',
  props<{ flights: Flight[] }>()
);

export const updateFlight = createAction(
  '[FlightBooking] Update Flight',
  props<{ flight: Flight }>()
);

export const flightsLoad = createAction(
  '[FlightBooking] Flights load',
  props<{ from: string; to: string; urgent: boolean }>()
);

export const flightsLoadedError = createAction(
  '[FlightBooking] Flights loaded error',
  props<{ error: any }>()
);