import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DingoBingoComponent } from './components/dingo-bingo/dingo-bingo.component';

@NgModule({
  declarations: [
    AppComponent,
    DingoBingoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
