import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { catchError, map, Observable, pipe, tap, throwError } from 'rxjs';
import { IUser } from './user-form/user-form.component';
import { IPoll } from './home/home.component';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  
  readonly configUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  
  handleError(err: HttpErrorResponse){
    if(err.status === 404){
      alert("Not found");
    }
    return throwError(() => err);

  }
}
