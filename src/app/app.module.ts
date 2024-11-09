import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

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
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';

import { FolderCardComponent } from './components/folder-card/folder-card.component'
import { FolderSearchComponent } from './pages/folder-search/folder-search.page';
import { FileCardComponent } from './components/file-card/file-card.component';
import { FileInputDialog } from './dialogs/file-input/file-input.dialog';
import { ConfirmationDialog } from './dialogs/confirmation/confirmation.dialog';
import { LoginPage } from './pages/login/login.page';
import { AuthService } from './services/auth.service';
import { HomePage } from './pages/home/home.page';
import { provideToastr, ToastrModule } from 'ngx-toastr';
import { NewFolderDialog } from './dialogs/new-folder/new-folder.dialog';
import { AuthInterceptor } from './utils/http-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    FolderCardComponent,
    FolderSearchComponent,
    FileCardComponent,
    FileInputDialog,
    ConfirmationDialog,
    LoginPage,
    HomePage,
    NewFolderDialog
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
    MatSelectModule,
    MatMenuModule,
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
    MatSelectModule,
    BrowserAnimationsModule,
    FormsModule,
    MatMenuModule
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthService,
    provideAnimations(), 
    provideToastr()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
