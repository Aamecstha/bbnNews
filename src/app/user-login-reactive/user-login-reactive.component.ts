import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-login-reactive',
  templateUrl: './user-login-reactive.component.html',
  styleUrls: ['./user-login-reactive.component.css'],
})
export class UserLoginReactiveComponent implements OnInit {
  signUpForm!: FormGroup;
  checkedAll=false
  checked=false
  resolvedComplainIds=[]
  complaintsList = [
    {
      id:"0",
      title:'paisa nikalda 1rs deduct garyo',
      user:'sanjay',
      phone:'100',
      email:"sanjay@gmail.com"
    },
    {
      id:"1",
      title:'paisa halna jaada jiskaayo',
      user:'rajani',
      phone:'100',
      email:"rajani@gmail.com"
    },
    {
      id:"2",
      title:'lack of nice customer service',
      user:'Munna Bhai',
      phone:'420',
      email:"munna_bhai@gmail.com"
    }
  ];

  constructor() {}

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'username': new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'complaints': new FormArray([])
    });
  }

  get f() {
    return this.signUpForm.controls!;
  }

  onSubmit() {
    console.log(this.signUpForm.value);
  }

  onCheckBoxChange(event:Event){
    const complain:FormArray=this.signUpForm.get('complaints') as FormArray
    if((<HTMLInputElement>event.target).checked){
      complain.push(new FormControl((<HTMLInputElement>event.target).value))
    }
    else{
      const index=complain.controls.findIndex(x=>x.value===(<HTMLInputElement>event.target).value)
      complain.removeAt(index)
    }
  }

  allCheckBoxToggle(){
    const complains:FormArray=this.signUpForm.get('complaints') as FormArray
    if(this.checkedAll){
      complains.clear()
      this.checked=false 
      this.checkedAll=false
    }
    else{
      complains.clear()
      this.complaintsList.map(complain=>{
        complains.push(new FormControl(complain.id))
      })
      this.checked=true
      this.checkedAll=true
    }
    
  }
}
