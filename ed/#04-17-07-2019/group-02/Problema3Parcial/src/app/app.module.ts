import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BatalhaNavalComponent } from './components/batalha.naval/batalha.naval.component';

@NgModule({
  declarations: [
    AppComponent,
    BatalhaNavalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
