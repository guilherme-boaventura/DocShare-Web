import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';

import { FolderCardComponent } from '../components/folder-card/folder-card.component'

@NgModule({
  declarations: [
    AppComponent,
    FolderCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatButtonModule
  ],
  exports: [
    MatSidenavModule,
    MatButtonModule,
    FolderCardComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
