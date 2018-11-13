import { Component, OnInit } from '@angular/core';
import { FlightSearchService } from '../services/flight-search.service';

@Component({
  selector: 'app-flight-search-form',
  templateUrl: './flight-search-form.component.html',
  styleUrls: ['./flight-search-form.component.css']
})
export class FlightSearchFormComponent implements OnInit {
  airports;

  constructor(
    private flightSearchService: FlightSearchService
  ) { }

  ngOnInit() {
    this.getAirportList();
  }

  getAirportList() {
    this.flightSearchService.getAirportList().subscribe(
      resp => {
        this.airports = resp;
      }, err => {

      }
    )
  }

}
