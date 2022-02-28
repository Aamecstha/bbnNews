import { Component, OnInit } from '@angular/core';
import { SubscriberCountService } from '../subscriber-count.service';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {
  userNaam?:string

  constructor(private subCountService:SubscriberCountService) { }

  ngOnInit(): void {
  }

  checkUserNaam(){
    if(!this.userNaam){
      return true
    }
    return false
  }

  resetUserNaam(){
    this.userNaam=''
  }

  subscribe(){
    this.subCountService.addSubscription()
  }

}
