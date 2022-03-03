import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, take } from 'rxjs';
import { authService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  constructor(private http:HttpClient,private auth:authService) { }

  postTweet(data){
      return this.http.post(`https://reactive-form-d0dba-default-rtdb.asia-southeast1.firebasedatabase.app/tweets.json`,data)   
  }
}
