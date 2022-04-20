/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Flight, FlightService } from '@flight-workspace/flight-lib';
import { Store } from '@ngrx/store';
import { AbstractFlightService } from 'libs/flight-lib/src/lib/services/abstract-flight.service';
import {
  combineLatest,
  delay,
  fromEvent,
  map,
  Observable,
  Subscription,
  take,
} from 'rxjs';
import {
  flightsLoad,
  flightsLoaded,
  updateFlight,
} from '../+state/flight-booking.actions';
import { FlightBookingAppState } from '../+state/flight-booking.reducer';
import {
  selectActiveUserFlights,
  selectBlockedFlightsWithParam,
  selectDelayedFlights,
  selectedFilteredFlights,
  selectFlights,
  selectItemsByFilter,
  selectUserName,
} from '../+state/flight-booking.selectors';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
})
export class FlightSearchComponent implements OnInit, AfterViewInit {
  from = 'Hamburg'; // in Germany
  to = 'Graz'; // in Austria
  urgent = false;

  flights$ = this.store.select(selectedFilteredFlights);
  flightsBlocked$ = this.store.select(selectBlockedFlightsWithParam([3]));
  activeFlightsForUser$ = this.store.select(selectActiveUserFlights);
  activeUser$ = this.store.select(selectUserName);
  delayedFlights$ = this.store.select(selectDelayedFlights);

  flightsFiltered$ = this.store.pipe(
    selectItemsByFilter(selectFlights, (flight) => flight.delayed === false)
  );

  get flights() {
    return this.flightService.flights;
  }

  // "shopping basket" with selected flights
  basket: { [id: number]: boolean } = {
    3: true,
    5: true,
  };

  @ViewChild('toInput')
  toInput: ElementRef | undefined;

  @ViewChild('fromInput')
  fromInput: ElementRef | undefined;

  private from$!: Observable<string>;
  private to$!: Observable<string>;

  constructor(
    private flightService: AbstractFlightService,
    private store: Store<FlightBookingAppState>
  ) {}

  subscriptions = new Subscription();

  ngOnInit() {}

  public ngAfterViewInit(): void {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.to$ = fromEvent<any>(this.toInput?.nativeElement, 'keyup');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.from$ = fromEvent<any>(this.fromInput?.nativeElement, 'keyup');
  }

  search(): void {
    if (!this.from && !this.to) return;

    // Non Store example
    // this.flightService.load(this.from, this.to, this.urgent);

    // FIXME:
    // combineLatest([this.from$, this.to$]).subscribe(([from, to]) => {
    //   if (!from && !to) return;
    //   this.flightService.load(from, to, this.urgent);
    // });

    // Store action example
    // this.flightService.find(this.from, this.to, this.urgent).subscribe({
    //   next: (flights) => {
    //     this.store.dispatch(flightsLoaded({ flights }));
    //   },
    //   error: (error) => {
    //     console.error('error', error);
    //   },
    // });

    // Dispatching action to effects
    this.store.dispatch(
      flightsLoad({
        from: this.from,
        to: this.to,
        urgent: this.urgent,
      })
    );
  }

  /**
   * Delays the first found flight for 15 minutes
   */
  delay(): void {
    this.flights$.pipe(take(1)).subscribe((flights: Flight[]) => {
      const flight = flights[0];

      const oldDate = new Date(flight.date);
      const newDate = new Date(oldDate.getTime() + 15 * 60 * 1000);
      const newFlight = { ...flight, date: newDate.toISOString() };

      this.store.dispatch(updateFlight({ flight: newFlight }));
    });
  }
}
