import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BbcNewsService {
  news:string[]=[]
  newsUpdated=new Subject<string[]>()

  constructor(private http:HttpClient){

  }

  getNews(){
    return [...this.news]
  }

  getNewsListener(){
    return this.newsUpdated
  }

  setNews(newNews:string){
    this.news.push(newNews)
    this.newsUpdated.next([...this.news])
  }

  getNewsFromBackend(){
    return this.http.get(`http://localhost:420/news`)
  }
  
}
