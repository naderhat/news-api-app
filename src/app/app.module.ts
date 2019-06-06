import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import {
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatStepperModule
} from '@angular/material';
import { NewsApiService } from 'src/app/news-api.service';
import { MatToolbarComponent } from './mat-toolbar/mat-toolbar.component';
import { MenuComponent } from './menu/menu.component';
import { SidenavCotainerComponent } from './sidenav-cotainer/sidenav-cotainer.component';

@NgModule({
  declarations: [AppComponent, MatToolbarComponent, MenuComponent, SidenavCotainerComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatStepperModule
  ],
  providers: [NewsApiService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
