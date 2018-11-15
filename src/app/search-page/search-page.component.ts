import { Component, OnInit, Output } from '@angular/core';
import { FlightSearchService } from '../services/flight-search.service';
import { EventEmitter } from 'events';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  activeTabNo = 1;
  searchInfo: any[];
  flightListWay1: any[];
  flightListWay2: any[];
  rangeValue: number;
  isPresent: boolean;

  constructor() {
    this.rangeValue = 10000;
  }

  ngOnInit() {
  }

  switchTab(key) {
    switch (key) {
      case 1:
        this.activeTabNo = 1;
        this.rangeValue = 10000;
        break;
      case 2:
        this.activeTabNo = 2;
        this.rangeValue = 10000;
        break;

      default:
        break;
    }
  }

  displayFlightList(event: any) {
    this.isPresent = false;
    this.searchInfo = event[0]
    this.flightListWay1 = event[1];
    this.flightListWay2 = event[2];
  }

  getPrice(price1: string, price2: string = "0") {
    this.isPresent = true;
    return parseInt(price1) + parseInt(price2);
  }

}
