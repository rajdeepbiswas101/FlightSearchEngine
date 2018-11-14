import { Component, OnInit, Output } from '@angular/core';
import { FlightSearchService } from '../services/flight-search.service';
import { EventEmitter } from 'events';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  @Output() flightSearch = new EventEmitter();

  activeTabNo = 1;

  constructor() { }

  ngOnInit() {
  }

  switchTab(key) {
    switch (key) {
      case 1:
        this.activeTabNo = 1;
        break;
      case 2:
        this.activeTabNo = 2;
        break;

      default:
        break;
    }
  }

}
