import { Component, OnInit } from '@angular/core';
import { UpdatedBBCService } from '../../updated-bbc/updated-bbc.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  newsList=[]

  constructor(private bbcService:UpdatedBBCService) { }

  ngOnInit(): void {
    this.bbcService.getNews().
    subscribe(
      (newsData:[])=>{
        this.newsList=newsData
      }
    )
  }

}
