import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UpdatedBBCService {

  constructor(private http:HttpClient,private router:Router) { }

  getNews(){
    return this.http.get(`http://localhost:420/news`)
  }

  getNewsById(newsId){
    return this.http.get(`http://localhost:420/news/${newsId}`)
  }

  postNews(data){
    this.http.post(`http://localhost:420/news`,data)
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

  editNews(id,updatedData){
    return this.http.put(`http://localhost:420/news/${id}`,updatedData)
  }

  deleteNews(id){
    // let params=new HttpParams()
    // params.append("id",id)
    return this.http.delete(`http://localhost:420/news/${id}`)
  }

}
