import { Component, OnInit } from '@angular/core';
import { AirportService } from '@flight-workspace/flight-lib';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'airport',
  templateUrl: './airport.component.html',
})
export class AirportComponent implements OnInit {
  airports: string[] = [];

  constructor(private airportService: AirportService) {}

  ngOnInit() {
    this.airportService.findAll().subscribe((airports) => {
      this.airports = airports;
    });
  }
}
