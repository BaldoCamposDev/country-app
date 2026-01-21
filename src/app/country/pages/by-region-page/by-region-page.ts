import { Component, inject, signal } from '@angular/core';
import { CountryList } from '../../components/country-list/country-list';
import { Region } from '../../interfaces/region.type';
import { CountryService } from '../../services/country.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';

@Component({
  selector: 'app-by-region-page',
  imports: [CountryList],
  templateUrl: './by-region-page.html',
})
export class ByRegionPage {
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'Antarctic'];

  countryService = inject(CountryService);

  selectedRegion = signal<Region | null>(null);

  countryResource = rxResource({
    params: () => ({ region: this.selectedRegion() }),
    stream: ({ params }) => {
      if (!params.region) return of([]);

      return this.countryService.searchByRegion(params.region);
    },
  });
}
