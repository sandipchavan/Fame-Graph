import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/facade/header/header.component';
import { NavbarComponent } from './components/facade/navbar/navbar.component';
import { FooterComponent } from './components/facade/footer/footer.component';
import { LoginComponent } from './components/facade/login/login.component';
import { SignupComponent } from './components/facade/signup/signup.component';
import { UserProfileComponent } from './components/feeds/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
