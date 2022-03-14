import { Component, OnInit } from '@angular/core';
import { UpdatedBBCService } from './updated-bbc.service';

@Component({
  selector: 'app-updated-bbc',
  templateUrl: './updated-bbc.component.html',
  styleUrls: ['./updated-bbc.component.css']
})
export class UpdatedBBCComponent implements OnInit {
  newsList=[]

  constructor(private bbcService:UpdatedBBCService) { }

  ngOnInit(): void {
    this.bbcService.getNews()
    .subscribe(
      (news:[])=>{
        this.newsList=news
        console.log(news)
      }
    )
  }

}
