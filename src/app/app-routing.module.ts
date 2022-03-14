import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth-guard';
import { AuthComponent } from './auth/auth.component';
import { BbcNewsComponent } from './bbc-news/bbc-news.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditPostComponent } from './dashboard/edit-post/edit-post.component';
import { EditProfileComponent } from './dashboard/edit-profile/edit-profile.component';
import { EditPostFormComponent } from './dashboard/edit-post-form/edit-post-form.component';
import { NewsUploaderComponent } from './news-uploader/news-uploader.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PipeIntroComponent } from './pipe-intro/pipe-intro.component';
import { PlayerComponent } from './players/player/player.component';
import { PlayersComponent } from './players/players.component';
import { TweeterComponent } from './tweeter/tweeter.component';
import { UpdatedBBCComponent } from './updated-bbc/updated-bbc.component';
import { UserSubscriptionsComponent } from './user-subscriptions/user-subscriptions.component';
import { DeletePostComponent } from './dashboard/delete-post/delete-post.component';

const routes: Routes = [
  {path:'',redirectTo:"home",pathMatch:'full'},
  {path:'home',component:UpdatedBBCComponent},
  {path:'user-subscriptions',component:UserSubscriptionsComponent,canActivate:[AuthGuard]},
  {path:'pipe-intro',component:PipeIntroComponent},
  {path:'login',component:AuthComponent},
  {path:'tweet',component:TweeterComponent,canActivate:[AuthGuard]},
  {path:'upload-news',component:NewsUploaderComponent,canActivate:[AuthGuard]},
  {path:'players',component:PlayersComponent,canActivateChild:[AuthGuard],children:[
    {path:':id/:power',component:PlayerComponent},
    {path:'login',component:AuthComponent}
  ]},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard],children:[
    {path:'edit-profile',component:EditProfileComponent},
    {path:'edit-post',component:EditPostComponent},
    {path:'edit-post/:id',component:EditPostFormComponent},
    {path:'delete-post',component:DeletePostComponent}
  ]},
  {path:'not-found',component:NotFoundComponent},
  {path:'**',redirectTo:'/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
