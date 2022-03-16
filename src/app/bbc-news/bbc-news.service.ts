import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Subject,tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BbcNewsService {

  constructor(private http:HttpClient,private router:Router){}

  getNews(){
    return this.http.get(`https://bbc-news-32944-default-rtdb.asia-southeast1.firebasedatabase.app/news.json`)
    .pipe(
      map(data=>{
        let dataArray=[]
        for(let key in data){
          dataArray.push(data[key])
        }
        return dataArray
      })
    )
  }

  postNews(newsData){
    this.http.post(`https://bbc-news-32944-default-rtdb.asia-southeast1.firebasedatabase.app/news.json`,newsData)
    .subscribe(
      resData=>{
        console.log(resData)
        this.router.navigate(['/home'])
      },
      err=>{
        console.log("error",err)
      }
    )
  }
  
}
