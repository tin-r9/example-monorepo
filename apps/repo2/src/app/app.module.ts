import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { UtilitiesModule } from "../../../../libs/utilities/src";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    UtilitiesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
