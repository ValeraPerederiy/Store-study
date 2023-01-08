import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthService {

    private isAuth = false;

    checkAuth(login:string, password:string){
        if(login === "Admin" && password === "1408"){
            this.isAuth = true;
        }else{
            this.isAuth = false;
        }
    }

    returnAuthStatus():Observable<boolean>{
        return of(this.isAuth)
    }
}