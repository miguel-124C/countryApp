import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
    selector: 'countries-table',
    templateUrl: 'country-table.component.html',
    styles: [
        `img{
            width: 35px;
        }`
    ]
})

export class CountryTableComponent {
    constructor() { }

    @Input()
    public countries: Country[] = [];

}