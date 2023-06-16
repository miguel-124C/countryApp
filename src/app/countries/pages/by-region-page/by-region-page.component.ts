import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { Region } from '../../interfaces/region.type';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public countries: Country[] = [];
  public regions: Region[] = [
    'Africa','America','Asia','Oceania'
  ]
  public selectedRegion?: Region;

  constructor(private countryService: CountriesService){}

  searchByRegion(region: Region){
    this.selectedRegion = region;

    this.countryService.searchRegion(region)
    .subscribe( countries => {
      this.countries = countries;
    } );
  }
}
