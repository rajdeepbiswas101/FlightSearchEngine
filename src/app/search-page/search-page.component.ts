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

  // Function to assign tab number on tab switch
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

  // Emit from flight-search-form.component
  displayFlightList(event: any) {
    this.isPresent = false;
    this.searchInfo = event[0]
    this.flightListWay1 = event[1];
    this.flightListWay2 = event[2];
  }

  // get the sum of prices ie Forward + Return
  getPrice(price1: string, price2: string = "0") {
    let sumPrices = parseInt(price1) + parseInt(price2);
    if (sumPrices <= this.rangeValue){
      this.isPresent = true;
    }
    return sumPrices;
  }

}
