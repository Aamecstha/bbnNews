import { Component,OnDestroy,OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { authService } from './auth/auth.service';
import { SubscriberCountService } from './services/subscriber-count.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
  title="damn"
  subscriberCount=0
  isAuthenticated=false
  private authSub:Subscription

  constructor(private subCountService:SubscriberCountService,private auth:authService){

  }
 
  ngOnInit(): void {
      this.auth.autoLogin()
      this.subCountService.getSubCountListener().subscribe((value)=>{
        this.subscriberCount=value
      })

      this.authSub=this.auth.user.subscribe(user=>{
        this.isAuthenticated=!user?false:true
      })
  }

  ngOnDestroy(): void {
      this.authSub.unsubscribe()
  }

  OnLogOut(){
    this.auth.logout()
  }

}
