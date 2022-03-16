import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, Observable, take } from 'rxjs';
import { authService } from './auth/auth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{

  constructor(private auth:authService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.auth.user.pipe(take(1),exhaustMap(user=>{
      if(!user){
        return next.handle(req)
      }
      let modifiedReq=req.clone({
        params:new HttpParams().set('token',user.token)
      })
      return next.handle(modifiedReq)
    }))
    
  }
}
