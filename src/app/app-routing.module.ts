import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth-guard';
import { AuthComponent } from './auth/auth.component';
import { BbcNewsComponent } from './bbc-news/bbc-news.component';
import { PipeIntroComponent } from './pipe-intro/pipe-intro.component';
import { PlayerComponent } from './player/player.component';
import { PlayersComponent } from './players/players.component';
import { TweeterComponent } from './tweeter/tweeter.component';
import { UserSubscriptionsComponent } from './user-subscriptions/user-subscriptions.component';

const routes: Routes = [
  {path:'',redirectTo:"home",pathMatch:'full'},
  {path:'home',component:BbcNewsComponent},
  {path:'user-subscriptions',component:UserSubscriptionsComponent,canActivate:[AuthGuard]},
  {path:'pipe-intro',component:PipeIntroComponent},
  {path:'login',component:AuthComponent},
  {path:'tweet',component:TweeterComponent,canActivate:[AuthGuard]},
  {path:'players',component:PlayersComponent,children:[
    {path:':id/:power',component:PlayerComponent},
    {path:'login',component:AuthComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
