import { Action } from '@ngrx/store';

export enum CurrentConditionsActionTypes {
  CurrentConditionsLoaded = '[CurrentConditions] CurrentConditions Loaded',
  CurrentConditionsLoadFailed = '[CurrentConditions] CurrentConditionsLoad Failed'
}

export class CurrentConditionsLoaded implements Action {
  readonly type = CurrentConditionsActionTypes.CurrentConditionsLoaded;

  constructor(public zipcode: string, public conditions: any) {
  }
}

export class CurrentConditionsLoadFailed implements Action {
  readonly type = CurrentConditionsActionTypes.CurrentConditionsLoadFailed;

  constructor(public zipcode: string, public error: any) {
  }
}

export type CurrentConditionsActions = CurrentConditionsLoaded | CurrentConditionsLoadFailed;
