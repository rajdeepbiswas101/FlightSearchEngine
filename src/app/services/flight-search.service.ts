import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightSearchService {
  
  constructor(
    private http: HttpClient
  ) { }

  // get list of airports
  getAirportList() {
    return this.http.get('../../assets/airports.json');
  }

  //get list of flights
  getFlightList(){
    return this.http.get('../../assets/flights.json');
  }

}
