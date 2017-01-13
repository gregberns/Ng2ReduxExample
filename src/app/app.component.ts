import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs'
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from './reducers/'
import { Actions } from './actions/'

@Component({
  selector: 'app-root',
  providers: [
    Actions
  ],
  template: `
  <h1 (click)="onClick()">
    {{title}}
  </h1>
  <br/>
  <p>Clicked {{ count | async }} times</p>
  <p>State: {{ state | async | json }}</p>
  `
})
export class AppComponent {
  state: Observable<IAppState>
  count: Observable<any>
  title = 'app works!';

  constructor(private ngRedux: NgRedux<IAppState>, private actions: Actions) {
    this.state = ngRedux.select()
    this.count = ngRedux.select('total')
  }

  onClick() {
    console.log("clicked")

    //all of these work:
    //this.ngRedux.dispatch({ type: 'increment' });
    //this.ngRedux.dispatch(this.actions.increment());
    this.actions.incrementDispatch()
  }
}
