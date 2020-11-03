import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddZipcode, ZipcodeActions } from '../actions/zipcode.actions';
import {LocationService} from '../location.service';
import { State } from '../reducers';

@Component({
  selector: 'app-zipcode-entry',
  templateUrl: './zipcode-entry.component.html'
})
export class ZipcodeEntryComponent {

  constructor(private store: Store<State>) { }

  // tslint:disable-next-line: typedef
  addLocation(zipcode: string){
    this.store.dispatch(new AddZipcode(zipcode));
  }

}
