import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Flight } from "../models/flight";
import { DummyFlightService } from "./dummy-flight.service";
import { FlightService } from "./flight.service";

@Injectable({
  providedIn: 'root',
  // eslint-disable-next-line no-constant-condition
  // Example swapping service implementation based on config using a factory
  useFactory: (http: HttpClient) => {
    true ? new FlightService(http) : new DummyFlightService();
  },
  // useClass: DummyFlightService, // example using a mock service at runtime
  useClass: FlightService,
})
export abstract class AbstractFlightService {
  flights: Flight[] = [];

  abstract find(from: string, to: string, urgent?: boolean): Observable<Flight[]>;
}
