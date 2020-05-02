import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { TodayComponent } from './today/today.component';
import {AgmCoreModule} from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    TodayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyCrcj0UNho08tXsqoOJ3BOTd_EWL-am4kI'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
