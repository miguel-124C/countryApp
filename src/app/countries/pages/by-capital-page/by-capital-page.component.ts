import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements OnInit {

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public termSearch?: string;
  
  constructor(private countryService: CountriesService){}
  
  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byCapital.countries;
    this.termSearch = this.countryService.cacheStore.byCapital.term;
  }

  searchByCapital(term: string){
    this.isLoading = true;

    this.countryService.searchCapital(term)
    .subscribe( countries => {
      this.countries = countries;
      this.isLoading = false;
    } );
  }
}
