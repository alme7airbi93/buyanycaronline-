import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CarService } from './modules/car.service';
import { CommonService } from './modules/config'

import { IndexComponent } from './pages/index/index.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { NewAdComponent }       from './pages/new-ad/new-ad.component';
import { ManageAdComponent } from './pages/manage-ad/manage-ad.component';
import { CarSearchComponent } from './pages/car-search/car-search.component';
import { CarDetailComponent } from './pages/car-detail/car-detail.component';
import { MonitorPageComponent } from './pages/monitor-page/monitor-page.component';
import { BoatSearchComponent } from './pages/boat-search/boat-search.component';
import { BoatDetailComponent } from './pages/boat-detail/boat-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    UserProfileComponent,
    NewAdComponent,
    ManageAdComponent,
    CarSearchComponent,
    CarDetailComponent,
    MonitorPageComponent,
    BoatSearchComponent,
    BoatDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    CarService,
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
