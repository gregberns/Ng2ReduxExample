import { NgRedux } from 'ng2-redux';

export const ACTIONS = {
  INCREMENT: 'INCREMENT'
};

import { Injectable } from '@angular/core';
@Injectable()
export class Actions {
  constructor(private ngRedux: NgRedux<any>) {}

  incrementDispatch() {
	  this.ngRedux.dispatch(this.increment())
  }

  //could make this private
  increment() {
    return {
      type: ACTIONS.INCREMENT,
      payload: null
    };
  }
}