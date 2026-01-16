import { Component, inject } from '@angular/core';
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

  onSearch(query: string) {
    if (!query || query == '') return;

    this.countryService.serachByCapital(query).subscribe((response) => {
      console.log(response);
    });
  }
}
