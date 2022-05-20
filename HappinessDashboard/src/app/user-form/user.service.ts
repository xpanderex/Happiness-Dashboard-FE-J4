import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IUser } from './user-form.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly configUrl = 'http://localhost:8080/api/user/';
  constructor(private http:HttpClient) { }
  registerUser(username:string , password:string){
    return this.http.post(this.configUrl + "register" , { "username": username,
                                                                "password": password} );
  }
    
  getUsersList():Observable<IUser[]> {
    return this.http.get<IUser[]>(this.configUrl + "users").pipe(
      catchError(this.handleError));
  }
  getUserByUsername(username:string) {
    return this.http.get(this.configUrl + "users/" + username).pipe(
      catchError(this.handleError));
  }

  handleError(err: HttpErrorResponse){
    if(err.status === 404){
      alert("Not found");
    }
    return throwError(() => err);

  }
}
