import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeLayoutComponent } from './ui/layout/home-layout/home-layout.component';
import { NavBarComponent } from './ui/layout/nav-bar/nav-bar.component';
import { SideBarComponent } from './ui/layout/side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent,
    NavBarComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
