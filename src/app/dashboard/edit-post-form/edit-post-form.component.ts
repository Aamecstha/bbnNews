import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UpdatedBBCService } from 'src/app/updated-bbc/updated-bbc.service';

interface News{
  dateCreated: string
  description: string
  imageUrl:string
  title: string
  __v: string
  _id: string

}

@Component({
  selector: 'app-edit-post-form',
  templateUrl: './edit-post-form.component.html',
  styleUrls: ['./edit-post-form.component.css'],
})
export class EditPostFormComponent implements OnInit {
  editForm: FormGroup;
  newsId = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private bbcService: UpdatedBBCService,
    private toastr:ToastrService
  ) {}

  ngOnInit(): void {
    this.editForm = this.fb.group({
      title: [''],
      imageUrl: [''],
      description: [''],
    });
    this.newsId = this.route.snapshot.params['id'];
    this.bbcService.getNewsById(this.newsId).subscribe((news:News) => {
      console.log('News: ', news);
      this.editForm.setValue({
        title: news.title,
        imageUrl: news.imageUrl,
        description:news.description,
      });
    });
  }

  editPost() {
    console.log(this.editForm.value)
    this.bbcService.editNews(this.newsId,this.editForm.value).
    subscribe(
      resData=>{
        console.log(resData)
        this.toastr.success("Post Edit successfull","damn",{timeOut:3000})
      },
      error=>{
        console.log("Error: ",error)
      }
    )
  }
}
