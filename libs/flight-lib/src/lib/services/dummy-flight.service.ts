import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flight } from '../models/flight';
import { AbstractFlightService } from './abstract-flight.service';

@Injectable()
export class DummyFlightService implements AbstractFlightService {
  flights: Flight[] = [];

  find(from: string, to: string, urgent: boolean): Observable<Flight[]> {
    return of([
      {
        id: 17,
        from: 'Graz',
        to: 'Hamburg',
        date: '2022-01-01',
        delayed: true,
      },
    ]);
  }
}
