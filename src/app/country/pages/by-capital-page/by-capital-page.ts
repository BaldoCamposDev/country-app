import { Component, inject, signal } from '@angular/core';
import { CountrySearchInput } from '../../components/country-search-input/country-search-input';
import { CountryList } from '../../components/country-list/country-list';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'by-capital-page',
  imports: [CountrySearchInput, CountryList],
  templateUrl: './by-capital-page.html',
})
export class ByCapitalPage {
  countryService = inject(CountryService);

  isLoading = signal(false);
  iserror = signal<string | null>(null);
  countries = signal<RESTCountry[]>([]);

  onSearch(query: string) {
    if (!query || query == '') return;

    if (this.isLoading()) return;

    this.isLoading.set(true);
    this.iserror.set(null);

    this.countryService.serachByCapital(query).subscribe((countries) => {
      console.log(countries);
      this.countries.set(countries);
      this.isLoading.set(false);
    });
  }
}
