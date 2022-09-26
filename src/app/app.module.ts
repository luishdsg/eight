import { HomeComponent } from './home/home.component';
import { LoadingComponent } from './animation/loading/loading.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Level1Component } from './pages/level1/level1.component';
import { Level2Component } from './pages/level2/level2.component';
import { Level3Component } from './pages/level3/level3.component';


// eslint-disable-next-line prefer-arrow/prefer-arrow-functions, @typescript-eslint/naming-convention
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    HomeComponent,
    Level1Component,
    Level2Component,
    Level3Component,
    // Level4Component,
    // Level5Component,
    // Level6Component,
    // Level7Component,
    // Level8Component,
    // Level9Component,
    // Level10Component,
    // Level11Component,
  ],
  imports: [
    BrowserModule,
    NgbPaginationModule,
    NgbAlertModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    NgbModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      }
    }),],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
