import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  
  constructor(private http: HttpClient) { }

  login(data){
    return this.http.post("api/login", data, {withCredentials:true})
  }

  signup(data){
    return this.http.post("api/signup", data, {withCredentials:true})
  }

  logout(){
    return this.http.post("api/logout", {}, {withCredentials:true})
  }

  getDetails(){
    return this.http.post("api/get-details", {}, {withCredentials:true})
  }
}
