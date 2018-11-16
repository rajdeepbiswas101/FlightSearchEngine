import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SearchPageComponent } from './search-page.component';
import { FlightSearchFormComponent } from '../flight-search-form/flight-search-form.component';
import { FlightSearchService } from '../services/flight-search.service';

describe('SearchPageComponent', () => {
  let component: SearchPageComponent;
  let fixture: ComponentFixture<SearchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchPageComponent, FlightSearchFormComponent],
      imports: [FormsModule,
        ReactiveFormsModule,
        HttpClientModule
      ],
      providers: [FlightSearchService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title in h2 tag', async(()=>{
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Flight Search Engine');
  }));

  it('should have Welcome note in h1 tag', async(()=>{
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Flight Search Engine!');
  }));

});
