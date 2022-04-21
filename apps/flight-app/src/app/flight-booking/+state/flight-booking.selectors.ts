import { createFeatureSelector, createSelector, select } from '@ngrx/store';
import { map, pipe } from 'rxjs';
import * as fromFlightBooking from './flight-booking.reducer';


// Create feature selector
export const selectFlightBooking = createFeatureSelector<fromFlightBooking.State>('flightBooking');

export const negativeList = (s: fromFlightBooking.FlightBookingAppState) =>
  s.flightBooking.negativeList;


export const selectPassengers = createSelector(
  selectFlightBooking,
  (state) => state.passenger
);

export const selectFlights = createSelector(
  selectFlightBooking,
  (state) => state?.flights || []
);

export const selectBookings = createSelector(
  selectFlightBooking,
  (state) => state.bookings
);

export const selectUser = createSelector(selectFlightBooking, (state) => state.user);
export const selectUserName = createSelector(
  selectFlightBooking,
  (state) => state.user?.name
);

export const selecFlightsCount = createSelector(
  selectFlights,
  (flights) => flights?.length
);


export const selectItemsByFilter = <T, K>(
  mapFn: (state: T) => Array<K>,
  filter: (item: K) => boolean
) =>
  pipe(
    // RxJS operator to select state from store
    select(mapFn),
    // RxJS map operator
    map((arr) =>
      // Array filter function
      arr.filter(filter)
    )
  );

export const selectDelayedFlights = () =>
  pipe(
    // RxJS operator to select state from store
    select(selectFlights),
    // RxJS map operator
    map((flights) =>
      // Array filter function
      flights.filter((f) => f.delayed)
    )
  );


export const selectedFilteredFlights = createSelector(
  selectFlights,
  negativeList,
  (flights, negativeList) => flights.filter((f) => !negativeList.includes(f.id))
);


export const selectActiveUserFlights = createSelector(
  // Selectors:
  selectFlights,
  selectBookings,
  selectUser,
  // Projector:
  (flights, bookings, user) => {
    const activeUserPassengerId = user.passengerId;
    const activeUserFlightIds = bookings
      .filter((b) => b.passengerId === activeUserPassengerId)
      .map((b) => b.flightId);
    const activeUserFlights = flights.filter((f) =>
      activeUserFlightIds.includes(f.id)
    );
    return activeUserFlights;
  }
);


export const selectBlockedFlightsWithParam = (blockedFlights: number[]) =>
  createSelector(selectFlights, (flights) =>
    flights.filter((f) => !blockedFlights.includes(f.id))
  );