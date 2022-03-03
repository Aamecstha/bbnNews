import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TweetService } from './tweet.service';

@Component({
  selector: 'app-tweeter',
  templateUrl: './tweeter.component.html',
  styleUrls: ['./tweeter.component.css']
})
export class TweeterComponent implements OnInit {
  tweeted=false

  constructor(private tweetService:TweetService) { }

  ngOnInit(): void {
  }

  submitData(form:NgForm){
    console.log(form.value)
    this.tweetService.postTweet(form.value)
    .subscribe(data=>{
        console.log(data)
        this.tweeted=true
        setTimeout(()=>this.tweeted=false,2000)
      },
      error=>{
        console.log(error)
      }
    )
  }

}
