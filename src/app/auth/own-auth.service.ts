import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OwnAuthService {

  constructor(private http:HttpClient) { }

  signup(email,password){
    this.http.post(`http://localhost:420/user/signup`,{email,password})
  }

}
