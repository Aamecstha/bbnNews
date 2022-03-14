import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UpdatedBBCService } from '../updated-bbc/updated-bbc.service';

@Component({
  selector: 'app-news-uploader',
  templateUrl: './news-uploader.component.html',
  styleUrls: ['./news-uploader.component.css']
})
export class NewsUploaderComponent implements OnInit {
  myForm:FormGroup
  constructor(private bbcService:UpdatedBBCService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.myForm=this.fb.group({
      title:["",[Validators.required,Validators.minLength(5)]],
      imageUrl:["",Validators.required],
      description:["",[Validators.required,Validators.minLength(20)]]
    })
  }

  submitForm(form:FormGroup){
    this.bbcService.postNews(form.value)
    console.log(this.myForm.value)
  }

}
