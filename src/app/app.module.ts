import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { SetpasswordComponent } from './auth/setpassword/setpassword.component';
import {EditComponent} from './workshop/profile/edit/edit.component';
import {ViewComponent} from './workshop/profile/view/view.component';
import {UsersListComponent} from './workshop/users/users-list/users-list.component'
import {UsersProfileComponent} from './workshop/users/users-profile/users-profile.component';

import { AuthModule} from './auth/auth.module'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SetpasswordComponent,
    UsersProfileComponent,
    UsersListComponent,
    ViewComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
