
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MaterialModule} from './material/material.module';
import {todoReducer} from './reducers/reducers';
import { JwtModule } from "@auth0/angular-jwt";

export function tokenGetter() {
  return "token";
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule, BrowserModule, BrowserAnimationsModule, MaterialModule,
    StoreModule.forRoot({todoReducer}),
    JwtModule.forRoot({
      config: {
        tokenGetter,
      }
    }),
  ],
  exports: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
}
