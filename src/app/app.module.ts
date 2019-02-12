import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderPrimaryComponent } from './header/header-primary/header-primary.component';
import { HeaderSecondaryComponent } from './header/header-secondary/header-secondary.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderPrimaryComponent,
    HeaderSecondaryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
