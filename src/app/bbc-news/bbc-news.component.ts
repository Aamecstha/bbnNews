import { Component, OnInit } from '@angular/core';
import { BbcNewsService } from './bbc-news.service';

@Component({
  selector: 'app-bbc-news',
  templateUrl: './bbc-news.component.html',
  styleUrls: ['./bbc-news.component.css']
})
export class BbcNewsComponent implements OnInit {
  newsList:string[]=[]
  newNews:string=''

  constructor(private newsService:BbcNewsService) { }

  ngOnInit(): void {
    this.newsList=this.newsService.getNews()
    this.newsService.getNewsListener().subscribe(
      (news)=>{
        this.newsList=news
      }
    )
  }

  addNews(){
    this.newsService.setNews(this.newNews)
  }
  setNewNews(event:Event){
    this.newNews=(<HTMLInputElement>event.target).value
  }

}
