import { Component,OnDestroy,OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
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
  websiteUsedTime=0
  websiteTimeSubscription:Subscription

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

                      //observer practise
      // const websiteUsedTimeObservable=Observable.create(observer=>{
      //   let count=0
      //   setInterval(()=>{
      //     console.log("website used time: ",this.websiteUsedTime)
      //     observer.next(count)
      //     if(count==3){
      //       observer.complete()
      //     }
      //     if(count>3){
      //       observer.error(new Error("count is greater than 3"))
      //     }
      //     count++
      //   },1000)
      // })

      // this.websiteTimeSubscription= websiteUsedTimeObservable.subscribe(
        
      //   data=>{
      //     this.websiteUsedTime=data
      //     console.log("next: ",data)
      //   },
      //   error=>{
      //     console.log("Error man: ",error)
      //   },
      //   complete=>{
      //     console.log("this is observable is completeed man")
      //   }
      // )
  }

  ngOnDestroy(): void {
      this.authSub.unsubscribe()
      // this.websiteTimeSubscription.unsubscribe()
  }

  OnLogOut(){
    this.auth.logout()
  }

}
