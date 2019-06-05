import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule
} from '@angular/material';
import { NewsApiService } from 'src/app/news-api.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [NewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
