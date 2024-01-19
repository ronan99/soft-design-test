import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from 'src/app/login/login.dto';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(login: Login): Observable<any>{
    return this.http.post( "/api/user/login", login)
  }

  isLogged(): Observable<any>{
    return this.http.post("/api/user/is-logged", null)
  }

}
