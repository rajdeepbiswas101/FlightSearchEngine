import { Component, OnInit } from '@angular/core';
import { FlightSearchService } from '../services/flight-search.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  airports;

  constructor() { }

  ngOnInit() {
  }

}
