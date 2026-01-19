import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { CountryMapper } from '../mappers/country.mapper';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);

  serachByCapital(query: string) {
    query = query.trim().toLowerCase();

    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`).pipe(
      map((restCountries) => CountryMapper.RestCountriesToCountries(restCountries)),
      catchError((error) => {
        console.log('Error fetching ', error);

        return throwError(() => new Error(`No se pudo obtener paises con ese query ${query}`));
      }),
    );
  }
}
