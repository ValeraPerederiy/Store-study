import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthService {

    private isAuth = false;

    public logOut(){
        this.isAuth = false;
    }

    public checkAuth(login:string, password:string){
        if(login === "Admin" && password === "1408"){
            this.isAuth = true;
        }else{
            this.isAuth = false;
        }
    }

    public returnAuthStatus():Observable<boolean>{
        return of(this.isAuth)
    }
}