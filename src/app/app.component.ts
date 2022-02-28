import { Component,OnInit } from '@angular/core';
import { SubscriberCountService } from './subscriber-count.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title="damn"
  subscriberCount=0
  constructor(private subCountService:SubscriberCountService){

  }
 
  ngOnInit(): void {
      this.subCountService.getSubCountListener().subscribe((value)=>{
        this.subscriberCount=value
      })
  }

}
