import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  @ViewChild('f') signupForm!:NgForm
  answer=''
  genders=["male","female"]
  user={
    username:'',
    email:'',
    secretQues:'',
    questionAnswer:'',
    gender:''
  }
  submitted=false
  @ViewChild('farm') farm!:NgForm

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(form:NgForm){
    console.log(this.signupForm)
    this.user.username=this.signupForm.value.userData.username
    this.user.email=this.signupForm.value.userData.email
    this.user.secretQues=this.signupForm.value.secretQues
    this.user.questionAnswer=this.signupForm.value.questionAnswer
    this.user.gender=this.signupForm.value.gender
    this.submitted=true
    this.signupForm.reset()
  }

  onSubmit(){
    //console.log(this.farm)
    let userData={
      username:'',
      email:''
    }
    userData['username']=this.farm.value.username
    userData.email=this.farm.value.email
    console.log('The user data is: ',userData)
  }
}
