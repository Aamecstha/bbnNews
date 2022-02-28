import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BbcNewsComponent } from './bbc-news/bbc-news.component';
import { PipeIntroComponent } from './pipe-intro/pipe-intro.component';
import { UserSubscriptionsComponent } from './user-subscriptions/user-subscriptions.component';

const routes: Routes = [
  {path:'',redirectTo:"home",pathMatch:'full'},
  {path:'home',component:BbcNewsComponent},
  {path:'user-subscriptions',component:UserSubscriptionsComponent},
  {path:'pipe-intro',component:PipeIntroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
