import { ZipcodeActions, ZipcodeActionTypes } from './../actions/zipcode.actions';
import { Action } from '@ngrx/store';
import { callbackify } from 'util';


export const zipcodesFeatureKey = 'zipcodes';

export interface ZipcodeState {
  zipcodes: Array<string>;
}

export const initialState: ZipcodeState = {
  zipcodes: []
};

export function zipcodeReducer(state = initialState, action: ZipcodeActions): ZipcodeState {
  switch (action.type) {
    case ZipcodeActionTypes.AddZipcode:
      return {...state, zipcodes: [...state.zipcodes, action.zipcode ]};
    case ZipcodeActionTypes.RemoveZipcode:
      return {...state, zipcodes: [...state.zipcodes.filter( item => item !== action.zipcode ) ]};
    default:
      return state;
  }
}