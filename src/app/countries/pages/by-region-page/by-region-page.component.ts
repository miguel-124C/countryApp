import { Region } from './../../interfaces/region.type';
import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit {

  public countries: Country[] = [];
  public regions: Region[] = [
    'Africa','America','Asia','Oceania'
  ]
  public selectedRegion?: Region;

  constructor(private countryService: CountriesService){}

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countryService.cacheStore.byRegion.region;
  }

  searchByRegion(region: Region){
    this.selectedRegion = region;

    this.countryService.searchRegion(region)
    .subscribe( countries => {
      this.countries = countries;
    } );
  }
}
