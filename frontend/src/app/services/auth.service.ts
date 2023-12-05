import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, switchMap, catchError } from 'rxjs/operators';

interface User {
  password: string;
  email?: string;
}

interface UserResponse { 
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private loginUrl = 'http://localhost:8081/login'; 
  //? ----- new SignUP LogIn ----
  private Url = 'http://localhost:8081/api/auth'; 
  //? ----- new SignUP LogIn ----

  constructor(private http: HttpClient) { }

  // signUp(userData: LoginData): Observable<any> {
  //   return this.http.post<any>(this.Url + '/login', userData);
  // }

  private handleError(error: HttpErrorResponse) {
    // Aquí podrías manejar diferentes tipos de errores
    return throwError(error.error.message || 'Error del servidor');
  }

  login(userData: User): Observable<UserResponse> {
    return this.http.post<UserResponse>(`${this.Url}/login`, userData).pipe(
      catchError(this.handleError)
    );
  }
}

// *new back
// services/auth.service.ts
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// // import { LoginData } from '../interfaces/loginData.interface';
// import { LoginData } from '../interfaces/LoginData.interface';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private authUrl = 'http://localhost:3000/authenticate'; // Asegúrate de que la URL coincida con tu backend

//   constructor(private http: HttpClient) {}

//   login(userData: LoginData): Observable<any> {
//     return this.http.post<any>(this.authUrl, userData);
//   }
// }
