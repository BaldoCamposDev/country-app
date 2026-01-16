import { Component } from '@angular/core';

@Component({
  selector: 'by-capital-page',
  imports: [],
  templateUrl: './by-capital-page.html',
})
export class ByCapitalPage {
  onSearch(value: string) {
    console.log(value);
  }
}
