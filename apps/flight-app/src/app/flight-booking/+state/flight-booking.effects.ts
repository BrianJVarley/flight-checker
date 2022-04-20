import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, switchMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as FlightBookingActions from './flight-booking.actions';
import { FlightService } from '@flight-workspace/flight-lib';
import { AbstractFlightService } from 'libs/flight-lib/src/lib/services/abstract-flight.service';



@Injectable()
export class FlightBookingEffects {
  loadFlightBookings$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(FlightBookingActions.loadFlightBookings),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map((data) =>
            FlightBookingActions.loadFlightBookingsSuccess({ data })
          ),
          catchError((error) =>
            of(FlightBookingActions.loadFlightBookingsFailure({ error }))
          )
        )
      )
    );
  });

  loadFlights$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FlightBookingActions.flightsLoad),
      switchMap((a) => this.flightService.find(a.from, a.to, a.urgent)),
      map((flights) => FlightBookingActions.flightsLoaded({ flights })),
      catchError((err) =>
        of(FlightBookingActions.flightsLoadedError({ error: err }))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private flightService: AbstractFlightService
  ) {}
}
