

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({providedIn: 'root'})
export class CountriesService {
    public apiUrl: string = 'https://restcountries.com/v3.1'

    constructor(private http: HttpClient) { }
    
    connectApi(url: string): Observable<Country[]>{
        return this.http.get<Country[]>(url)
        .pipe(
            catchError(() => of([]) )
        ); 
    }

    searchCountryAlphaCode(code: string):Observable<Country | null>{
        const url = `${this.apiUrl}/alpha/${code}`;
        return this.http.get<Country[]>(url)
        .pipe(
            map(countries => countries.length > 0 ? countries[0]: null),
            catchError(() => of(null) )
        ); 
    }


    searchCapital(term: string): Observable<Country[]> {
        const url = `${this.apiUrl}/capital/${term}`;
        return this.connectApi(url);
    }

    searchCountry(term: string): Observable<Country[]>{
        const url = `${this.apiUrl}/name/${term}`;
        return this.connectApi(url);
    }
    searchRegion(region: string): Observable<Country[]>{
        const url = `${this.apiUrl}/region/${region}`;
        return this.connectApi(url);
    }

}