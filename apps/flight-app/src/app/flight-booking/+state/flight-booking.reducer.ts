import { Flight } from '@flight-workspace/flight-lib';
import { createReducer, on } from '@ngrx/store';
import * as FlightBookingActions from './flight-booking.actions';

export const flightBookingFeatureKey = 'flightBooking';

export interface State {
  flights: Flight[];
  negativeList: number[];
  passenger: Record<
    number,
    {
      id: number;
      name: string;
      firstName: string;
    }
  >;
  bookings: {
    passengerId: number;
    flightId: number;
  }[];
  user: {
    name: string;
    passengerId: number;
  };
}

export const initialState: State = {
  flights: [],
  negativeList: [3],
  passenger: {
    1: { id: 1, name: 'Smith', firstName: 'Anne' },
  },
  bookings: [
    { passengerId: 1, flightId: 3 },
    { passengerId: 1, flightId: 5 },
  ],
  user: { name: 'anne.smith', passengerId: 1 },
};

export interface FlightBookingAppState {
  flightBooking: State;
}

export const reducer = createReducer(
  initialState,

  on(FlightBookingActions.loadFlightBookings, (state) => state),
  on(FlightBookingActions.loadFlightBookingsSuccess, (state, action) => state),
  on(FlightBookingActions.loadFlightBookingsFailure, (state, action) => state),
  on(FlightBookingActions.flightsLoaded, (state, action) => {
    const flights = action.flights;
    return { ...state, flights };
  }),
  on(FlightBookingActions.updateFlight, (state, action) => {
    const flight = action.flight;
    const flights = state.flights.map((f) => (f.id === flight.id ? flight : f));
    return { ...state, flights };
  })
);
