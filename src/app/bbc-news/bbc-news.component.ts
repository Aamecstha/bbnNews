import { Component, OnInit } from '@angular/core';
import { BbcNewsService } from './bbc-news.service';

@Component({
  selector: 'app-bbc-news',
  templateUrl: './bbc-news.component.html',
  styleUrls: ['./bbc-news.component.css']
})
export class BbcNewsComponent implements OnInit {
  newsList=[]

  constructor(private bbcService:BbcNewsService) { }

  ngOnInit(): void {
    this.bbcService.getNews()
    .subscribe(
      (news)=>{
        console.log(news)
        this.newsList=news
        
      }
    )
  }

}
