import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { authService } from "./auth.service";
import { map } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class AuthGuard implements CanActivate,CanActivateChild{

    constructor(private auth:authService,private router:Router){

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.auth.user.pipe(map(user=>{
            const auth=user?true:false
            if(auth){
                return true
            }
            else{
                return this.router.createUrlTree(['/login'])
            }
        }))
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.canActivate(childRoute,state)
    }
}