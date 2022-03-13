import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {AppComponent, GameService} from './app.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from "@angular/common/http";
import { SideNavComponent } from './side-nav/side-nav.component';
import {versionGroupReducer, versionReducer} from './state/version.reducer';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({versions: versionReducer, versionGroups: versionGroupReducer}, {}),
    HttpClientModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
