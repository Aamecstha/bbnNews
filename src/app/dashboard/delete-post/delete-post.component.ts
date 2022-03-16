import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UpdatedBBCService } from 'src/app/updated-bbc/updated-bbc.service';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.css']
})
export class DeletePostComponent implements OnInit {
  newsList=[]
  constructor(private bbcService:UpdatedBBCService,private toastr:ToastrService,private route:Router) { }

  ngOnInit(): void {
    this.bbcService.getNews()
    .subscribe(
      (news:[])=>{
        console.log("News: ",news)
        this.newsList=news
      }, 
      error=>{
        
      }
    )
  }

  deletePost(postId){
    console.log("postId: ",postId)
    this.bbcService.deleteNews(postId)
    .subscribe(
      (successMsg)=>{
        this.toastr.success("Post deleted successfullly","Delete",{timeOut:3000})
        let curUrl=this.route.url
        this.route.navigateByUrl("/").then(()=>{
          this.route.navigate([curUrl])
          console.log(curUrl)
        })
      },
      errorMsg=>{
        console.log("errorMsg:",errorMsg.error.message)
        this.toastr.error("Post Delete failed","Delete",{timeOut:3000})
      }
    )
  }

}
