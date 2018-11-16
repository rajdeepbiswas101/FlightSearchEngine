import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { FlightSearchFormComponent } from './flight-search-form.component';
import { SearchPageComponent } from '../search-page/search-page.component';
import { FlightSearchService } from '../services/flight-search.service';

describe('FlightSearchFormComponent', () => {
  let component: FlightSearchFormComponent;
  let fixture: ComponentFixture<FlightSearchFormComponent>;
  let parentComponent: SearchPageComponent;
  let parentFixture: ComponentFixture<SearchPageComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FlightSearchFormComponent, SearchPageComponent],
      imports: [FormsModule,
        ReactiveFormsModule,
        HttpClientModule],
      providers: [FlightSearchService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    parentFixture = TestBed.createComponent(SearchPageComponent);
    parentComponent = parentFixture.componentInstance;
    fixture = TestBed.createComponent(FlightSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    parentFixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
