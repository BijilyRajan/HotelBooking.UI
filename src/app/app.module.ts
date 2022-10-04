import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './navigation/header/header.component'; 

import { MaterialModule } from './material.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BookingComponent } from './booking/booking.component';
import { HttpClientModule } from '@angular/common/http';
import { HotelComponent } from './hotel/hotel.component';
import { HoteldetailsComponent } from './hoteldetails/hoteldetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    SidenavListComponent,
    NavtabsComponent,
    BookingComponent,
    HotelComponent,
    HoteldetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
