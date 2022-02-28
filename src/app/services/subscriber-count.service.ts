import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriberCountService {
   subCount=new Subject<number>()
   count=0

  constructor() { }

  getSubCount(){
    return this.count
  }

  getSubCountListener(){
    return this.subCount
  }

  addSubscription(){
    this.count+=1
    this.subCount.next(this.count)
  }
}
