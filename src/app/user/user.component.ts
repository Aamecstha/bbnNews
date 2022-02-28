import { Component, OnInit } from '@angular/core';
import { BbcNewsService } from '../bbc-news/bbc-news.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userNames=["amit","rajani","samir","sanjay","ram","shyam","gopal"]
  userName:string=''
  newsList:string[]=[]
  subscribedToNews=false

  constructor(private newService:BbcNewsService) { }

  ngOnInit(): void {
    this.userName=this.userNames[Math.floor(Math.random()*7)]
  }

  subscribe(){
    this.newsList=this.newService.getNews()
    this.newService.getNewsListener().subscribe(
      news=>{
        this.newsList=news
        console.log(this.newsList)
      }
    )
    this.subscribedToNews=true
  }

}
