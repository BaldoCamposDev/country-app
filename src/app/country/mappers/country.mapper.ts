import { Country } from '../interfaces/country.interface';

export class CountryMapper {
  static RestCountryToCountry(restCountry: RESTCountry): Country {
    return {
      cca2: restCountry.cca2,
      flag: restCountry.flag,
      flagSvg: restCountry.flags.svg,
      name: restCountry.name.official,
      capital: restCountry.capital[0],
      population: restCountry.population,
    };
  }

  static RestCountriesToCountries(restCountries: RESTCountry[]): Country[] {
    // return restCountries.map(this.RestCountryToCountry); // Funciona de la misma manera
    return restCountries.map((restCountry) => this.RestCountryToCountry(restCountry));
  }
}
