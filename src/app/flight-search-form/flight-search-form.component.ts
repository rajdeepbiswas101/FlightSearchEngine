import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FlightSearchService } from '../services/flight-search.service';
import { map, filter } from 'rxjs/operators';
import { forEach } from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-flight-search-form',
  templateUrl: './flight-search-form.component.html',
  styleUrls: ['./flight-search-form.component.css']
})
export class FlightSearchFormComponent implements OnInit {
  private _activeTab: number;
  searchDetails: FormGroup;
  @Input()
  set activeTab(val: number) {
    this._activeTab = val;
    if (this.activeTab === 2) {
      this.searchDetails.controls.rDate.setValidators([Validators.required]);
    } else {
      this.searchDetails.controls.rDate.clearValidators();
    }
    this.searchDetails.controls.rDate.updateValueAndValidity()
    // this.searchDetails.reset();
  }
  get activeTab() {
    return this._activeTab;
  }
  @Output() flightSearch = new EventEmitter<any>();
  airports: any;
  flights: any;
  flightList: any[];
  flightListWay1: any[];
  flightListWay2: any[];

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
    this.flightSearchService.getFlightList().subscribe(
      resp => {
        this.flights = JSON.parse(JSON.stringify(resp));
      }, err => {

      }
    )
  }

  Submit() {

    this.searchDetails.markAsDirty();
    if (this.searchDetails.valid) {

      this.flightListWay1 = this.makeFlightList(this.searchDetails.controls['oCity'].value, this.searchDetails.controls['dCity'].value, this.searchDetails.controls['dDate'].value);
      if (this.activeTab === 2) {
        this.flightListWay2 = this.makeFlightList(this.searchDetails.controls['dCity'].value, this.searchDetails.controls['oCity'].value, this.searchDetails.controls['rDate'].value);
      } else {
        this.flightListWay2 = [];
      }
      let searchInfo = {
        from: this.searchDetails.controls['oCity'].value,
        to: this.searchDetails.controls['dCity'].value,
        dDate: this.searchDetails.controls['dDate'].value,
        rDate: this.searchDetails.controls['rDate'].value,
        isReturn: this.activeTab === 2 ? true : false
      };
      let emitdata = [];
      emitdata.push(searchInfo);
      emitdata.push(this.flightListWay1);
      emitdata.push(this.flightListWay2);
      this.flightSearch.emit(emitdata);
    }

    // console.log(this.flightListWay1);
    // console.log(this.flightListWay2);
  }

  makeFlightList(origin: string, destination: string, date: string) {
    this.getFlightList();
    this.flightList = this.flights.data;
    let flightListTemp = this.flightList.filter(flight => (flight.from === origin) && (flight.to === destination));
    for (let item of flightListTemp) {
      item.detail = item.detail.filter(x => x.date === date);
    }
    flightListTemp = flightListTemp.filter(item => item.detail.length > 0);
    return flightListTemp;
  }

  initForm() {
    this.searchDetails = this.formBuilder.group({
      oCity: ['', Validators.required],
      dCity: ['', Validators.required],
      dDate: ['', Validators.required],
      rDate: [''],
      passenger: ['', Validators.required]
    })
  }
  assignCityCode() {
    console.log("Works");
  }

  isFieldValid(form: FormGroup, field: string) {
    return !form.get(field).valid && (form.dirty || form.get(field).dirty);
  }

}
