import { Component, OnInit } from '@angular/core';
import { SubscriberCountService } from '../services/subscriber-count.service';

@Component({
  selector: 'app-damn',
  templateUrl: './damn.component.html',
  styleUrls: ['./damn.component.css']
})
export class DamnComponent implements OnInit {
  title = 'Academind';
  name:any='Hari Bahadur'
  server_name=''

  constructor(private subCountService:SubscriberCountService) { }

  ngOnInit(): void {
  }

  setName=(name:String)=>{
    this.name=name
  }

  getRandomNo(){
    var randomNo=Math.floor(Math.random()*10)+1
    return randomNo
  }

  setServerName(event:Event){
    this.server_name=(<HTMLInputElement>event.target).value
  }

  subscribe(){
    this.subCountService.addSubscription()
  }
}
