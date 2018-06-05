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
import { TileComponent } from "./components/tile/tile.component";
import { MeFollowComponent } from "./components/me/me-follow/me-follow.component";
import { MePanelComponent } from "./components/me/me-panel/me-panel.component";
import { PineappleComponent } from "./components/pineapple/pineapple.component";
import { PineappleBackComponent } from "./components/pineapple/pineapple-back/pineapple-back.component";
import { LostComponent } from "./components/lost/lost.component";
import { PineappleHeadComponent } from "./components/pineapple/pineapple-head/pineapple-head.component";
import { PineappleContentComponent } from "./components/pineapple/pineapple-content/pineapple-content.component";

@NgModule({
  bootstrap: [
      AppComponent
  ],
  declarations: [
      AppComponent,
      NavigationComponent,
      NavigationSwitchComponent,
      MeComponent,
      MeFollowComponent,
      MePanelComponent,
      DevComponent,
      TileComponent,
      PineappleComponent,
      PineappleBackComponent,
      LostComponent,
      PineappleHeadComponent,
      PineappleContentComponent
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
