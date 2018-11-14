import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightSearchService {
  
  constructor(
    private http: HttpClient
  ) { }

  getAirportList() {
    return this.http.get('../../assets/airports.json');
  }

  getFlightList(){
    return this.http.get('../../assets/flights.json');
  }

}
