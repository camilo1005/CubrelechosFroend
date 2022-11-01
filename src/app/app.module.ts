import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeMainComponent } from './components/home-main/home-main.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';


const appRoutes: Routes = [
  {path:'', component:HomeMainComponent},
  {path:'header', component:HeaderComponent },
  {path:'signin', component: SignInComponent },
  {path:'signup', component:SignUpComponent },

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeMainComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
