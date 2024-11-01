import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table'
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';

import { FolderCardComponent } from './components/folder-card/folder-card.component'
import { FolderSearchComponent } from './pages/folder-search/folder-search.page';
import { FileCardComponent } from './components/file-card/file-card.component';
import { FileInputDialog } from './dialogs/file-input/file-input.dialog';
import { LoginPage } from './pages/login/login.page';
import { AuthService } from './services/auth-service';
import { HomePage } from './pages/home/home.page';
import { provideToastr, ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    FolderCardComponent,
    FolderSearchComponent,
    FileCardComponent,
    FileInputDialog,
    LoginPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatTabsModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule, 
    ToastrModule.forRoot()
  ],
  exports: [
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatTabsModule,
    MatDialogModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    AuthService,
    provideAnimations(), 
    provideToastr()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
