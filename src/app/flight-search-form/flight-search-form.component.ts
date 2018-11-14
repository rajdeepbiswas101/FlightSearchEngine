import { Component, OnInit, Output, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FlightSearchService } from '../services/flight-search.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-flight-search-form',
  templateUrl: './flight-search-form.component.html',
  styleUrls: ['./flight-search-form.component.css']
})
export class FlightSearchFormComponent implements OnInit {
  private _activeTab: number;
  searchDetails: FormGroup;
  @Input()
  set activeTab(val: number){
    this._activeTab = val;
  }
  get activeTab(){
    return this._activeTab;
  }
  //@Output() flightSearch = new EventEmitter();
  airports: any;
  flights: any;

  constructor(
    private flightSearchService: FlightSearchService,
    private formBuilder: FormBuilder
  ) { 
    this.initForm();
    //this.searchDetails.reset();
  }

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
    console.log(this.searchDetails);
  }

  initForm(){
    this.searchDetails = this.formBuilder.group({
      oCity: [''],
      dCity: [''],
      dDate: [''],
      rDate: [''],
      passenger: ['']
    })
  }
  assignCityCode(){
    console.log("Works");
  }

}
