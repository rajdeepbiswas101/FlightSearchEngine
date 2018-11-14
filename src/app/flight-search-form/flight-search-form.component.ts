import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FlightSearchService } from '../services/flight-search.service';

@Component({
  selector: 'app-flight-search-form',
  templateUrl: './flight-search-form.component.html',
  styleUrls: ['./flight-search-form.component.css']
})
export class FlightSearchFormComponent implements OnInit {
  airports: any;
  flights: any;

  constructor(
    private flightSearchService: FlightSearchService
  ) { }

  ngOnInit() {
    this.getAirportList();
    this.getFlightList();
  }

  getAirportList() {
    this.flightSearchService.getAirportList().subscribe(
      resp => {
        this.airports = resp;
      }, err => {

      }
    )
  }

  getFlightList() {
    // this.flightSearchService.getFlightList().subscribe(
    //   resp => {
    //     this.flights = resp;
    //   }, err => {

    //   }
    // )
  }

  Submit() {

  }


}
