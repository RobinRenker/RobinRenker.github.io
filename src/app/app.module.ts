import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import '../styles/styles.scss';

import { TextService } from "./providers/text.service";
import { NavigationService } from "./providers/navigation.service";

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NavigationSwitchComponent } from './components/navigation/navigation-switch/navigation-switch.component';
import { MeComponent } from "./components/me/me.component";
import { DevComponent } from "./components/dev/dev.component";

@NgModule({
  bootstrap: [
      AppComponent
  ],
  declarations: [
      AppComponent,
      NavigationComponent,
      NavigationSwitchComponent,
      MeComponent,
      DevComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule
  ],
  providers: [
      TextService,
      NavigationService
  ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
})
export class AppModule {

}
