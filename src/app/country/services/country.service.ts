import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, delay, map, of, tap, throwError } from 'rxjs';
import { CountryMapper } from '../mappers/country.mapper';
import { Country } from '../interfaces/country.interface';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);

  private queryCacheCapital = new Map<string, Country[]>();

  private queryCacheCountry = new Map<string, Country[]>();

  searchByCapital(query: string) {
    query = query.trim().toLowerCase();

    if (this.queryCacheCapital.has(query)) {
      return of(this.queryCacheCapital.get(query));
    }

    console.log(`llegando al servidor por ${query}`);

    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`).pipe(
      map((restCountries) => CountryMapper.RestCountriesToCountries(restCountries)),
      tap((countries) => this.queryCacheCapital.set(query, countries)),
      catchError((error) => {
        return throwError(() => new Error(`No se pudo obtener paises con ese query ${query}`));
      }),
    );
  }

  searchByCountry(query: string) {
    query = query.trim().toLowerCase();

    if (this.queryCacheCountry.has(query)) {
      return of(this.queryCacheCountry.get(query));
    }

    console.log(`llegando al servidor por ${query}`);

    return this.http.get<RESTCountry[]>(`${API_URL}/name/${query}`).pipe(
      map((restCountries) => CountryMapper.RestCountriesToCountries(restCountries)),
      tap((countries) => this.queryCacheCountry.set(query, countries)),
      delay(2000),
      catchError((err) => {
        console.log(err);

        return throwError(() => new Error(`No se pudo obtener paises con ese query ${query}`));
      }),
    );
  }

  searchByCountryByAlphaCode(code: string) {
    return this.http.get<RESTCountry[]>(`${API_URL}/alpha/${code}`).pipe(
      map((restCountries) => CountryMapper.RestCountriesToCountries(restCountries)),
      map((countries) => countries[0]),
      catchError((err) => {
        return throwError(() => new Error(`No se pudo obtener paises con ese código ${code}`));
      }),
    );
  }
}
