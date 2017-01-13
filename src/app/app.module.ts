import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgReduxModule, NgRedux } from 'ng2-redux';

import { IAppState, rootReducer, INIT_STATE } from './reducers/'
import { Actions } from './actions/'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule
  ],
  providers: [
    Actions
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    //ngRedux.provideStore(store);
    ngRedux.configureStore(rootReducer, INIT_STATE);
  }
}
