import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenu } from '../../components/top-menu/top-menu';

@Component({
  selector: 'country-layout',
  imports: [RouterOutlet, TopMenu],
  templateUrl: './CountryLayout.html',
})
export class CountryLayout {}
