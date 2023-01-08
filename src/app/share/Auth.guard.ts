import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from './auth.sevice';

@Injectable({
    providedIn: "root"
})
export class AuthGuard implements CanActivate{

    constructor(public authService:AuthService){}

    canActivate(route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
        ): boolean | Observable<boolean> | Promise<boolean> 
        {
            //console.log(this.authService.tellIsAuth())
           return this.authService.returnAuthStatus()
    }

}