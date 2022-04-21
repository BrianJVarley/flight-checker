import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Flight } from "../models/flight";
import { FlightService } from "./flight.service";

@Injectable({
  providedIn: 'root',
  useClass: FlightService,
})
export abstract class AbstractFlightService {
  flights: Flight[] = [];

  abstract find(from: string, to: string, urgent?: boolean): Observable<Flight[]>;
}
