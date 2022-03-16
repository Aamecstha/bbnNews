import { HttpClient,HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError,Subject,throwError,tap, BehaviorSubject } from "rxjs";
import { environment } from "src/environments/environment";
import { User } from "./user.model";

export interface authResponseData{
    idToken:string,
    email:string,
    refreshToken:string,
    expiresIn:string,
    localId:string,
    registered?:boolean
}

export interface UserData{
    userId:string,
    token:string
}


@Injectable({
    providedIn:'root'
})
export class authService{
    API_KEY='AIzaSyClBm9h9bgCNHCnHXil73VpIgjQbV7qFJ4'
    user=new BehaviorSubject<User>(null)

    constructor(private http:HttpClient,private router:Router){
    }

    signUp(email,password){
        // return this.http.post<authResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.API_KEY}`,
        // {
        //     "email":email,
        //     "password":password,
        //     "returnSecureToken":true
        // })
        // .pipe(catchError(this.handleError)
        // )
        console.log(`${environment.LOCAL_URL}/user/signup`)
        return this.http.post<UserData>(`${environment.LOCAL_URL}/user/signup`,{
            "email":email,
            "password":password
        })
        .pipe(
            tap(data=>{
                console.log("Sign up: ",data)
            })
        )
    }

    login(email,password){
        console.log(`${environment.LOCAL_URL}/user/login`)
        return this.http.post<UserData>(`${environment.LOCAL_URL}/user/login`,{
            "email":email,
            "password":password
        })
         .pipe(
            tap(resData=>{
                this.handleAuthentication(resData)
            }))
        // return this.http.post<authResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.API_KEY}`,
        // {
        //     "email":email,
        //     "password":password,
        //     "returnSecureToken":true
        // }
        // )
        // .pipe(catchError(this.handleError),
        //     tap(resData=>{
        //         this.handleAuthentication(resData)
        //     }))
    }

    logout(){
        this.user.next(null)
        this.router.navigate(['/login'])
        localStorage.removeItem('userData')
    }

    autoLogin(){
        const userData:UserData=JSON.parse(localStorage.getItem('userData'))
        console.log("userData",userData)
        if(!userData){
            return
        }
        
        let loadedUser=new User(userData.userId,userData.token)

        if(loadedUser.token){
            this.user.next(loadedUser)
        }

    }

    private handleAuthentication(resData:UserData){
        let user=new User(resData.userId,resData.token)
        this.user.next(user)
        localStorage.setItem('userData',JSON.stringify(user))
    }

        //for handling error message in frontend
    // private handleError(errorRes:HttpErrorResponse){
    //     let errorMsg="Login failed due to unknown error"
    //         if(!errorRes.error || !errorRes.error.error){
    //             return throwError(errorMsg)
    //         }
    //         switch(errorRes.error.error.message){
    //             case "EMAIL_EXISTS":
    //                 errorMsg="this email already exists"
    //                 break
    //             case "EMAIL_NOT_FOUND":
    //                 errorMsg="this email is not found"
    //                 break
    //             case "INVALID_PASSWORD":
    //                 errorMsg="password is invalid"
    //                 break
    //         }
    //         return throwError(errorMsg)
    // }
    
}