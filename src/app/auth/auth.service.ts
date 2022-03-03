import { HttpClient,HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError,Subject,throwError,tap, BehaviorSubject } from "rxjs";
import { User } from "./user.model";

export interface authResponseData{
    idToken:string,
    email:string,
    refreshToken:string,
    expiresIn:string,
    localId:string,
    registered?:boolean
}


@Injectable({
    providedIn:'root'
})
export class authService{
    API_KEY='AIzaSyA3LddCAX68sITHRvi8Ri89fgmsa7Rtv7o'
    user=new BehaviorSubject<User>(null)

    constructor(private http:HttpClient,private router:Router){
    }

    signUp(email,password){
        return this.http.post<authResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.API_KEY}`,
        {
            "email":email,
            "password":password,
            "returnSecureToken":true
        })
        .pipe(catchError(this.handleError)
        // ,tap(resData=>{
        //         this.handleAuthentication(resData)
        //     })
        )
    }

    login(email,password){
        return this.http.post<authResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.API_KEY}`,
        {
            "email":email,
            "password":password,
            "returnSecureToken":true
        }
        )
        .pipe(catchError(this.handleError),
            tap(resData=>{
                this.handleAuthentication(resData)
            }))
    }

    logout(){
        this.user.next(null)
        this.router.navigate(['/login'])
        localStorage.removeItem('userData')
    }

    autoLogin(){
        const userData:{email:string,id:string,_token:string,_tokenExpirationDate:string}=JSON.parse(localStorage.getItem('userData'))
        console.log("userData",userData)
        if(!userData){
            return
        }

        let loadedUser=new User(userData.email,userData.id,userData._token,new Date(userData._tokenExpirationDate))

        if(loadedUser.token){
            this.user.next(loadedUser)
        }

    }

    private handleAuthentication(resData:authResponseData){
        let expirationDate=new Date(new Date().getTime()+ +resData.expiresIn*1000)
        let user=new User(resData.email,resData.localId,resData.idToken,expirationDate)
        this.user.next(user)
        localStorage.setItem('userData',JSON.stringify(user))
    }

    private handleError(errorRes:HttpErrorResponse){
        let errorMsg="Login failed due to unknown error"
            if(!errorRes.error || !errorRes.error.error){
                return throwError(errorMsg)
            }
            switch(errorRes.error.error.message){
                case "EMAIL_EXISTS":
                    errorMsg="this email already exists"
                    break
                case "EMAIL_NOT_FOUND":
                    errorMsg="this email is not found"
                    break
                case "INVALID_PASSWORD":
                    errorMsg="password is invalid"
                    break
            }
            return throwError(errorMsg)
    }
    
}