import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Flight } from '@flight-workspace/flight-lib';
import { catchError, debounceTime, map, Observable, of, pairwise, share, Subscription, switchMap, tap, throwError, timer } from 'rxjs';

@Component({
  selector: 'flight-workspace-flight-typeahead',
  templateUrl: './flight-typeahead.component.html',
  styleUrls: ['./flight-typeahead.component.css'],
})
export class FlightTypeaheadComponent implements OnDestroy {
  control = new FormControl();
  public flights$: Observable<Flight[]> | undefined;
  public diff$: Observable<number> | undefined;
  timer$: Observable<number> = timer(0, 2_000).pipe(
    tap(value => console.log('Observable Processing', value)),
    share()
  )
  subscriptions$ = new Subscription();
  loading = false;

  constructor(private http: HttpClient) {


    this.rxjsDemo();

    this.flights$ = this.control.valueChanges.pipe(
      debounceTime(300),
      tap((input) => (this.loading = true)),
      switchMap((input) => this.load(input)),

      tap((v) => (this.loading = false)),
      catchError((err) => throwError({ error: err }))
    );

    this.diff$ = this.flights$.pipe(
      pairwise(),
      map(([a, b]) => b.length - a.length)
    );
  }

  load(from: string): Observable<Flight[]> {
    const url = 'http://www.angular.at/api/flight';
    const params = new HttpParams().set('from', from);
    const headers = new HttpHeaders().set('Accept', 'application/json');

    return this.http.get<Flight[]>(url, { params, headers });
  }

  rxjsDemo(): void {
    this.subscriptions$.add(this.timer$.subscribe((value) => console.log('Observable :: TS Callback', value)));
  }

  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }
}

