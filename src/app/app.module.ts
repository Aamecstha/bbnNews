import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DamnComponent } from './damn/damn.component';
import { Task1Component } from './task1/task1.component';
import { BbcNewsComponent } from './bbc-news/bbc-news.component';
import { UserComponent } from './user/user.component';
import { UserSubscriptionsComponent } from './user-subscriptions/user-subscriptions.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserLoginReactiveComponent } from './user-login-reactive/user-login-reactive.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialTableComponent } from './material-table/material-table.component';

//material components
import { MatTableModule} from '@angular/material/table'
import {MatCheckboxModule} from "@angular/material/checkbox";
import { PipeIntroComponent } from './pipe-intro/pipe-intro.component';
import { ShortenPipe} from "./pipes/shorten.pipe"
import { FilterAgePipe } from './pipes/filter-age.pipe';
import { AuthComponent } from './auth/auth.component'
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { TweeterComponent } from './tweeter/tweeter.component';
import { AuthInterceptorService } from './auth-interceptor.service';
import { PlayerComponent } from './player/player.component';
import { PlayersComponent } from './players/players.component';
@NgModule({
  declarations: [
    AppComponent,
    DamnComponent,
    Task1Component,
    BbcNewsComponent,
    UserComponent,
    UserSubscriptionsComponent,
    UserLoginComponent,
    UserLoginReactiveComponent,
    MaterialTableComponent,
    PipeIntroComponent,
    ShortenPipe,
    FilterAgePipe,
    AuthComponent,
    LoadingSpinnerComponent,
    TweeterComponent,
    PlayerComponent,
    PlayersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCheckboxModule,
    HttpClientModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
