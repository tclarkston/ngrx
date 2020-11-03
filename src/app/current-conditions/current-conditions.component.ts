import { Component } from '@angular/core';
import {WeatherService} from '../weather.service';
import {LocationService} from '../location.service';
import {Router} from '@angular/router';
import { State } from '../reducers';
import { Store } from '@ngrx/store';
import { state } from '@angular/animations';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css']
})

export class CurrentConditionsComponent {
  zipcodes: Array<string>;

  constructor(private weatherService: WeatherService,
              private locationService: LocationService,
              private router: Router,
              private store: Store<State>) {
                this.store.select(data => data.zipcodes)
                .subscribe(zips => this.zipcodes = zips.zipcodes);
  }

  getCurrentConditions() {
    return this.weatherService.getCurrentConditions();
  }

  showForecast(zipcode: string){
    this.router.navigate(['/forecast', zipcode]);
  }
}
