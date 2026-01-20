import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'not-found',
  imports: [RouterLink],
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {
  location = inject(Location);

  goBack() {
    this.location.back();
  }
}
